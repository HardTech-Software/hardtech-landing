import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: rgba(36, 65, 255, 0.55);
  backdrop-filter: blur(6px);
  position: relative;
  padding: 24px 20px;
  border-bottom-left-radius: 30px;
  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.3);
  max-height: calc(100vh - 7.2rem);
`;

export const LogoIcon = styled.div`
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  padding-bottom: 36px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
  
`;

export const ButtonContainer = styled.div`
  height: 38px;
`;
