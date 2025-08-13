import { theme } from "@/helpers/theme";
import { styled } from "styled-components";
import Typography from "../typography";

export const Container = styled.div`
  width: 262px;
  height: 1700px;
  background: linear-gradient(to bottom, ${theme.background} 0%, #21319b 100%);
  position: relative;
  clip-path: polygon(50% 0%, 100% 17%, 100% 83%, 50% 100%, 0% 83%, 0% 17%);
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  position: absolute;
  bottom: 80px;

  @media (max-width: 1250px) {
    bottom: 67px;
    gap: 8px;
  }
`;

export const InfoContainer = styled.div`
  background-color: ${theme.primary};
  height: 114px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  text-align: center;

  @media (max-width: 1250px) {
    height: 95px;
  }
`;

export const TopContainer = styled.div`
  background-color: ${theme.primary};
  height: 22px;
  opacity: 0.5;
  @media (max-width: 1250px) {
    height: 19px;
  }
`;

export const BottomContainer = styled.div`
  background-color: ${theme.primary};
  height: 10px;
  opacity: 0.3;
  @media (max-width: 1250px) {
    height: 8px;
  }
`;

export const TypographyCustom = styled(Typography)`
  border-bottom: 2px solid ${theme.background};
  padding: 7px;
  width: 162px;
  margin-top: 25px;
`;

export const AvatarContainer = styled.div`
  width: 186px;
  height: 186px;
  border-radius: 50%;
  position: absolute;
  top: 70px;
  left: 50%;
  overflow: hidden;
  transform: translateX(-50%);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.5);
  img {
    width: 186px;
    height: 186px;
  }

  @media (max-width: 1250px) {
    width: 155px;
    height: 155px;
    top: 60px;
    img {
      width: 155px;
      height: 155px;
    }
  }
`;
