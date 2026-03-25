export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const isMobile = window.innerWidth <= 768;
  const header = isMobile
    ? (document.getElementById("site-header") as HTMLElement | null)
    : null;
  const headerHeight = header?.offsetHeight ?? 0;
  const extraOffset = isMobile ? -70 : 0;

  const rect = section.getBoundingClientRect();
  let scrollTop = isMobile
    ? window.scrollY + rect.top - headerHeight - extraOffset
    : window.scrollY + rect.top;

  if (scrollTop < 0) {
    scrollTop = 0;
  }

  window.scrollTo({ top: scrollTop, behavior: "smooth" });
};

export const navItemsSidebar = [
  { label: "HOME", sectionId: "home-section" },
  { label: "QUE OFRECEMOS", sectionId: "services-section" },
  { label: "NUESTROS PROYECTOS", sectionId: "projects-section" },
  // { label: "NUESTRO EQUIPO", sectionId: "team-section" },
  { label: "VISIÓN & MISIÓN", sectionId: "mission-section" },
  { label: "COTIZA CON NOSOTROS", sectionId: "quote-section" },
];

export const navItemsHeader = [
  { label: "HOME", sectionId: "home-section" },
  { label: "QUE OFRECEMOS", sectionId: "services-section" },
  { label: "NUESTROS PROYECTOS", sectionId: "projects-section" },
  // { label: "NUESTRO EQUIPO", sectionId: "team-section" },
  { label: "VISIÓN & MISIÓN", sectionId: "mission-section" },
  { label: "COTIZA CON NOSOTROS", sectionId: "quote-section" },
];
