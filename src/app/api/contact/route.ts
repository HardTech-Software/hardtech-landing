import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// TODO: Add rate limiting (e.g. upstash/ratelimit) if abuse is detected in production.

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DESCRIPTION_MIN = 10;
const DESCRIPTION_MAX = 2000;

interface ContactPayload {
  email: string;
  subject: string;
  description: string;
  honeypot?: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validatePayload(
  body: unknown,
): { valid: true; data: ContactPayload } | { valid: false; error: string } {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Cuerpo de la solicitud inválido." };
  }

  const { email, subject, description, honeypot } = body as Record<
    string,
    unknown
  >;

  // Honeypot check — bots fill hidden fields
  if (typeof honeypot === "string" && honeypot.length > 0) {
    // Silently reject but return success to confuse bots
    return { valid: false, error: "HONEYPOT" };
  }

  if (typeof email !== "string" || !email.trim()) {
    return { valid: false, error: "El correo es requerido." };
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    return { valid: false, error: "El correo no es válido." };
  }

  if (typeof subject !== "string" || !subject.trim()) {
    return { valid: false, error: "El servicio es requerido." };
  }

  if (typeof description !== "string" || !description.trim()) {
    return { valid: false, error: "La descripción es requerida." };
  }
  if (description.trim().length < DESCRIPTION_MIN) {
    return {
      valid: false,
      error: `La descripción debe tener al menos ${DESCRIPTION_MIN} caracteres.`,
    };
  }
  if (description.trim().length > DESCRIPTION_MAX) {
    return {
      valid: false,
      error: `La descripción no puede superar los ${DESCRIPTION_MAX} caracteres.`,
    };
  }

  return {
    valid: true,
    data: {
      email: email.trim(),
      subject: subject.trim(),
      description: description.trim(),
    },
  };
}

function buildEmailHtml(
  email: string,
  subject: string,
  description: string,
  sentAt: string,
): string {
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeDescription = escapeHtml(description).replace(/\n/g, "<br/>");

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #f9f9f9; border-radius: 8px;">
      <h2 style="color: #1d1d1d; margin-bottom: 24px;">Nuevo contacto desde HardTech</h2>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; font-weight: bold; color: #555; width: 140px;">Correo del cliente:</td>
          <td style="padding: 10px 0; color: #1d1d1d;">${safeEmail}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: bold; color: #555;">Servicio:</td>
          <td style="padding: 10px 0; color: #1d1d1d;">${safeSubject}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Descripción:</td>
          <td style="padding: 10px 0; color: #1d1d1d;">${safeDescription}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: bold; color: #555;">Fecha/Hora:</td>
          <td style="padding: 10px 0; color: #1d1d1d;">${escapeHtml(sentAt)}</td>
        </tr>
      </table>
    </div>
  `;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const validation = validatePayload(body);

  if (!validation.valid) {
    if (validation.error === "HONEYPOT") {
      // Return fake success to confuse bots
      return NextResponse.json({ success: true }, { status: 200 });
    }
    return NextResponse.json({ error: validation.error }, { status: 422 });
  }

  const { email, subject, description } = validation.data;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error(
      "[contact] Missing environment variables: RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL",
    );
    return NextResponse.json(
      { error: "Error de configuración del servidor." },
      { status: 500 },
    );
  }

  const sentAt = new Date().toLocaleString("es-CL", {
    timeZone: "America/Santiago",
  });

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: "Nuevo contacto desde HardTech",
      html: buildEmailHtml(email, subject, description, sentAt),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "No pudimos enviar tu mensaje. Inténtalo nuevamente." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    console.error("[contact] Unexpected error sending email");
    return NextResponse.json(
      { error: "Ocurrió un error inesperado. Inténtalo más tarde." },
      { status: 500 },
    );
  }
}
