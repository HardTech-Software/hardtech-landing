"use client";
import "./globals.css";
import { metadata } from "./metadata";
import { Layout } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
