"use client";
import { ThemeProvider } from "styled-components";
import { Layout } from "@/components";
import { theme } from "@/helpers/theme";
import StyledComponentsRegistry from "@/lib/registry";
import React from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <Layout>{children}</Layout>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
