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
  { label: "NUESTROS PROYECTOS", sectionId: "projects-section" },
  { label: "Q&A", sectionId: "question-answer-section" },
  { label: "CONTACTO", sectionId: "footer-section" },
];
export const navItemsHeader = [
  { label: "HOME", sectionId: "home-section" },
  { label: "NUESTROS PROYECTOS", sectionId: "projects-section" },
  { label: "Q&A", sectionId: "question-answer-section" },
];
