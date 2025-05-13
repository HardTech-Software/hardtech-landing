"use client";
import { ThemeProvider } from "styled-components";
import "./globals.css";
import { metadata } from "./metadata";
import { Layout } from "@/components";
import { theme } from "@/helpers/theme";
import { exo2, inter } from "@/utils/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${exo2.className}`}>
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
