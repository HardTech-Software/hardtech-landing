export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const header = document.querySelector("header") as HTMLElement | null;
  const headerHeight = header?.offsetHeight ?? 0;

  const rect = section.getBoundingClientRect();
  const scrollTop = window.scrollY + rect.top - headerHeight;

  window.scrollTo({ top: scrollTop, behavior: "smooth" });
};

export const navItemsSidebar = [
  { label: "HOME", sectionId: "home-section" },
  { label: "QUE OFRECEMOS", sectionId: "services-section" },
  { label: "NUESTROS PROYECTOS", sectionId: "projects-section" },
  { label: "NUESTRO EQUIPO", sectionId: "team-section" },
  { label: "VISIÓN & MISIÓN", sectionId: "mission-section" },
  { label: "COTIZA CON NOSOTROS", sectionId: "quote-section" },
];

export const navItemsHeader = [
  { label: "HOME", sectionId: "home-section" },
  { label: "QUE OFRECEMOS", sectionId: "services-section" },
  { label: "NUESTROS PROYECTOS", sectionId: "projects-section" },
  { label: "NUESTRO EQUIPO", sectionId: "team-section" },
  { label: "VISIÓN & MISIÓN", sectionId: "mission-section" },
  { label: "COTIZA CON NOSOTROS", sectionId: "quote-section" },
];
