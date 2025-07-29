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
  { label: "QUE OFRECEMOS", sectionId: "services-section" },
  { label: "NUESTROS PROYECTOS", sectionId: "projects-section" },
  { label: "NUESTRO EQUIPO", sectionId: "team-section" },
  { label: "NUESTRA VISIÓN & MISIÓN", sectionId: "mission-section" },
  { label: "CONTÁCTATE CON NOSOTROS", sectionId: "contact-section" },
];

export const navItemsHeader = [
  { label: "HOME", sectionId: "home-section" },
  { label: "QUE OFRECEMOS", sectionId: "services-section" },
  { label: "NUESTROS PROYECTOS", sectionId: "projects-section" },
  { label: "NUESTRO EQUIPO", sectionId: "team-section" },
  { label: "VISIÓN & MISIÓN", sectionId: "mission-section" },
];
