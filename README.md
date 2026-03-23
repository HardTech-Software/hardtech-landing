# 🚀 HardTech - Landing Page

Landing page oficial de HardTech, una agencia de desarrollo de aplicaciones móviles y sitios web.

## 📋 Descripción

Sitio web corporativo desarrollado con Next.js 15, presentando nuestros servicios, proyectos y equipo. Incluye formulario de contacto funcional y diseño completamente responsive.

## 🛠️ Tecnologías

- **Framework**: Next.js 15.2.8
- **UI**: React 19
- **Estilos**: Styled Components 6.1.16 + Tailwind CSS 4
- **Carrusel**: Swiper 11.2.6
- **TypeScript**: 5
- **Fuentes**: Orbitron, Exo 2, Inter

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción

```bash
npm run build
npm start
```

### Linter

```bash
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal con metadata
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── sections/         # Secciones de la página
│   ├── icons/            # Iconos SVG
│   └── ...               # Otros componentes
├── helpers/              # Funciones auxiliares
├── hooks/                # Custom React hooks
├── lib/                  # Configuraciones (Styled Components Registry)
└── utils/                # Utilidades y constantes
```

## 🎨 Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Formulario de contacto funcional con validación
- ✅ Carrusel de proyectos interactivo
- ✅ Optimización SEO (metadata, sitemap, robots.txt)
- ✅ Accesibilidad mejorada (alt text, aria-labels)
- ✅ Styled Components con SSR configurado
- ✅ Tipado completo con TypeScript

## 📝 Configuración

### Email de Contacto

Actualiza el email en `src/utils/constants/constants.ts`:

```typescript
export class Constants {
  static email = "tu-email@hardtech.cl";
  static instagram = "@hardtech";
  static instagramUrl = "https://www.instagram.com/hardtech";
}
```

### Proyectos

Actualiza los proyectos en `src/utils/constants/projects.ts` con las imágenes y URLs reales.

## 🌐 Deploy en Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tu-usuario/hardtech-landing)

1. Conecta tu repositorio de GitHub
2. Vercel detectará automáticamente Next.js
3. Presiona "Deploy"

## 📄 Licencia

© 2026 HardTech. Todos los derechos reservados.

## 👥 Contacto

- **Email**: contacto@hardtech.cl
- **Instagram**: [@hardtech](https://www.instagram.com/hardtech)

---

Desarrollado con ❤️ por el equipo de HardTech
