export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const header = document.querySelector("header") as HTMLElement | null;
  const headerHeight = header?.offsetHeight ?? 0;

  const rect = section.getBoundingClientRect();
  let scrollTop = window.scrollY + rect.top - headerHeight;

  // En servicios, centra visualmente el bloque de cards dentro del viewport.
  // Evita que al navegar quede demasiado arriba en tablet.
  if (sectionId === "services-section" && window.innerWidth <= 1024) {
    const cards = section.querySelectorAll(".info-card");

    if (cards.length > 0) {
      let top = Number.POSITIVE_INFINITY;
      let bottom = Number.NEGATIVE_INFINITY;

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const absoluteTop = window.scrollY + cardRect.top;
        const absoluteBottom = window.scrollY + cardRect.bottom;

        if (absoluteTop < top) top = absoluteTop;
        if (absoluteBottom > bottom) bottom = absoluteBottom;
      });

      const cardsCenter = (top + bottom) / 2;
      const viewportCenter =
        headerHeight + (window.innerHeight - headerHeight) / 2;

      scrollTop = cardsCenter - viewportCenter;
    }
  }

  if (scrollTop < 0) {
    scrollTop = 0;
  }

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
