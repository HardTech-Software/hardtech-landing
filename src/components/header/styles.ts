import styled from "styled-components";

interface HeaderProps {
  $isScrolled: boolean;
}

export const HeaderContainer = styled.div<HeaderProps>`
  height: 5.3rem;
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  position: fixed;
  z-index: 6;
  width: 100%;
  top: 0;

  /* Transiciones separadas para mejor control */
  transition:
    background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    backdrop-filter 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    border-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  /* Background con gradiente y blur cuando hace scroll */
  background: ${(props) =>
    props.$isScrolled
      ? "linear-gradient(to left, rgba(36, 65, 255, 0.95) 0%, rgba(22, 22, 22, 0.95) 55%)"
      : "transparent"};

  /* Efecto glassmorphism cuando hace scroll */
  backdrop-filter: ${(props) =>
    props.$isScrolled ? "blur(12px) saturate(180%)" : "none"};
  -webkit-backdrop-filter: ${(props) =>
    props.$isScrolled ? "blur(12px) saturate(180%)" : "none"};

  /* Sombra multi-capa más elegante */
  box-shadow: ${(props) =>
    props.$isScrolled
      ? "0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)"
      : "none"};

  /* Borde sutil cuando hace scroll */
  border-bottom: ${(props) =>
    props.$isScrolled
      ? "1px solid rgba(255, 255, 255, 0.1)"
      : "1px solid transparent"};

  /* Animación de fade-in inicial */
  opacity: 0;
  animation: fadeInHeader 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  &.fade-in {
    animation-delay: 0.1s;
  }

  @keyframes fadeInHeader {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1250px) {
    padding: 0 16px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 1250px) {
    gap: 0;
    flex: 1;
    width: 100%;
    justify-content: space-between;
  }
`;

export const LogoIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 60px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  svg,
  img {
    width: 62px;
    height: 69px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 1250px) {
    margin-left: 0;
  }
`;

export const MenuIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  @media (min-width: 1251px) {
    display: none;
  }
  @media (max-width: 1250px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5rem;

  @media (max-width: 1250px) {
    display: none;
    margin-right: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  @media (max-width: 1250px) {
    display: none;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  padding: 20px;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;

  &:hover {
    background-color: rgba(28, 50, 197, 0.5);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  /* Efecto underline animado */
  &::after {
    content: "";
    position: absolute;
    bottom: 8px;
    left: 20px;
    right: 20px;
    height: 2px;
    background: linear-gradient(90deg, #e91e63, #2441ff);
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const ButtonContainer = styled.div`
  height: 38px;
  width: 160px;
  margin-left: 40px;
  @media (max-width: 1250px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
  backdrop-filter: blur(4px);
  animation: fadeInOverlay 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes fadeInOverlay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  z-index: 7;
  top: 5.4rem;
  right: 0;
  width: 235px;
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s ease;
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(100%)"};
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};

  @media (min-width: 1251px) {
    display: none;
  }
  @media (max-width: 750px) {
    width: 188px;
  }
`;
