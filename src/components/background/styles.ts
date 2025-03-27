import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  position: fixed;
  z-index: -2;
`;

export const ContainerTop = styled.div`
  display: flex;
  margin-right: -56px;
  margin-top: -13px;
`;
export const ContainerBottom = styled.div`
  display: flex;
  margin-left: -28px;
  margin-top: -13px;
`;

export const Container1 = styled.div`
  width: 50px;
  height: 56px;
  background-color: ${theme.background};
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
`;

export const ContainerInner = styled.div`
  width: 43px;
  height: 46px;
  background-color: ${theme.background};
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;
