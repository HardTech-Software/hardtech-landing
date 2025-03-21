"use client";

import "./globals.css";
import { useEffect } from "react";
import { metadata } from "./metadata";
import { Layout } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const hideNextjsToast = () => {
      const portal = document.querySelector("nextjs-portal");
      if (portal && portal.shadowRoot) {
        const toast = portal.shadowRoot.querySelector("[data-nextjs-toast]");
        if (toast) toast.remove();
      }
    };

    setTimeout(hideNextjsToast, 500);
  }, []);
  return (
    <html lang="en">
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
