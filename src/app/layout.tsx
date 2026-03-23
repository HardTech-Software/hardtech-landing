import "./globals.css";
import { orbitron, exo2, inter } from "@/utils/fonts";
import ClientLayout from "@/components/client-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
