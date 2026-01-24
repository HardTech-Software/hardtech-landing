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
  z-index: 4;
  width: 100%;
  top: 0;
  
  transition: all 0.6s ease-in-out;

  background: ${(props) => 
    props.$isScrolled 
      ? "linear-gradient(to left, rgb(36,65,255) 0%, #161616 55%)" 
      : "transparent"};
      
  box-shadow: ${(props) => 
    props.$isScrolled 
      ? "0 10px 30px rgba(0, 0, 0, 0.7)" 
      : "none"};

  @media (max-width: 1250px) {
    padding: 0 30px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center; 
  gap: 1.5rem;
  @media (max-width: 1250px) {
    gap: 0; 
    flex: 1; 
  }
`;

export const LogoIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 60px;
  
  svg, img {
    width: 62px;
    height: 69px;
  }

  @media (max-width: 1250px) {
    margin-left: 40px;
  }
`;

export const MenuIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media (min-width: 1251px) {
    display: none;
  }
  @media (max-width: 1250px) {
    margin-left: auto;
    margin-right: -6rem;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5rem;
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
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1c32c5;
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
  background-color: transparent;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  z-index: 5;
  top: 5.4rem;
  right: 0;
  width: 235px;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.$isOpen ? "translateX(0)" : "translateX(100%)")};
  
  @media (min-width: 1251px) {
    display: none;
  }
  @media (max-width: 750px) {
    width: 188px;
  }
`;