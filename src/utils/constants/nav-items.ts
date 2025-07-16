export const headerHeight = 80;

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - headerHeight;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

export const navItemsSidebar = [
  { label: "HOME", sectionId: "home-section" },
  { label: "QUÉ OFRECEMOS", sectionId: "" },
  { label: "NUESTROS PROYECTOS", sectionId: "projects-section" },
  { label: "NUESTRO EQUIPO", sectionId: "" },
  { label: "NUESTRA VISIÓN & MISIÓN", sectionId: "" },
  { label: "CONTÁCTATE CON NOSOTROS", sectionId: "" },
];

export const navItemsHeader = [
  { label: "HOME", sectionId: "home-section" },
  { label: "QUÉ OFRECEMOS", sectionId: "" },
  { label: "NUESTROS PROYECTOS", sectionId: "projects-section" },
  { label: "NUESTRO EQUIPO", sectionId: "" },
  { label: "VISIÓN & MISIÓN", sectionId: "" },
];
