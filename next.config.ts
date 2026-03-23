import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Habilitar Styled Components con SSR
  compiler: {
    styledComponents: true,
  },

  // Optimización de imágenes
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Mejorar rendimiento
  reactStrictMode: true,

  // Configuración de producción
  poweredByHeader: false,

  // Opcional: Si necesitas configurar dominios externos para imágenes
  // images: {
  //   domains: ['tu-cdn.com'],
  // },
};

export default nextConfig;
