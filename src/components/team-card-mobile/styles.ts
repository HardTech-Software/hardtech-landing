import styled from "styled-components";
import Typography from "../typography";
import { theme } from "@/helpers/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 335px;
  justify-content: flex-end;
  position: relative;
  align-items: center;
`;

export const InfoContainer = styled.div`
  background-color: ${theme.tertiary};
  height: 114px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  text-align: center;
  width: 100vw;
`;

export const TopContainer = styled.div`
  background-color: ${theme.tertiary};
  height: 22px;
  opacity: 0.5;
  width: 290px;
`;

export const BottomContainer = styled.div`
  background-color: ${theme.tertiary};
  height: 10px;
  opacity: 0.3;
  width: 290px;
`;

export const TypographyCustom = styled(Typography)`
  border-bottom: 2px solid ${theme.background};
  padding: 7px;
  width: 179px;
  margin-top: 25px;
`;

export const AvatarContainer = styled.div`
  width: 206px;
  height: 206px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.5);
  img {
    width: 206px;
    height: 206px;
  }
`;
