import "./globals.css";
import { orbitron, exo2, inter } from "@/utils/fonts";
import ClientLayout from "@/components/client-layout";
import type { Metadata } from "next";

const SITE_URL = "https://hardtech.cl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: "HardTech - Desarrollo de Apps y Sitios Web con Impacto Real",
  description:
    "En HardTech creamos aplicaciones móviles y sitios web con diseño atractivo y desarrollo sólido. Transformamos tus ideas en soluciones digitales que generan resultados.",
  keywords: [
    "desarrollo web",
    "desarrollo de apps",
    "diseño web",
    "desarrollo móvil",
    "hardtech",
    "chile",
  ],
  authors: [{ name: "HardTech" }],
  creator: "HardTech",
  publisher: "HardTech",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://hardtech.cl",
    title: "HardTech - Desarrollo de Apps y Sitios Web",
    description:
      "Creamos aplicaciones móviles y sitios web con diseño atractivo y desarrollo sólido.",
    siteName: "HardTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "HardTech - Desarrollo de Apps y Sitios Web",
    description:
      "Creamos aplicaciones móviles y sitios web con diseño atractivo y desarrollo sólido.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "HardTech",
      url: SITE_URL,
      description:
        "Empresa de desarrollo de aplicaciones móviles, plataformas web, sitios web, e-commerce y branding digital.",
      contactPoint: {
        "@type": "ContactPoint",
        email: "contacto@hardtech.cl",
        contactType: "sales",
      },
      sameAs: ["https://www.instagram.com/hardtech.cl/"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "HardTech",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "es-CL",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.className} ${exo2.className} ${orbitron.className}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
