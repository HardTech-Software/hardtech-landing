import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const CardShadow = styled.div`
  position: relative;
  display: inline-block;

  filter: drop-shadow(0 0px 15px rgba(254, 113, 244, 0));
  transition: all 0.4s ease-in-out;

  &.active,
  &:hover {
    filter: drop-shadow(0 0px 35px rgba(254, 113, 244, 0.35));
  }

  /*@media (hover: hover) and (pointer: fine) {
    &.active {
      filter: drop-shadow(0 0px 15px rgba(254, 113, 244, 0));
      transform: none;
    }
  }*/

`;

export const CardContainer = styled.div`
  width: 190px;
  height: 338px;
  background: linear-gradient(to bottom, ${theme.background} 0%, #21319b 100%);
  clip-path: polygon(50% 0%, 100% 17%, 100% 83%, 50% 100%, 0% 83%, 0% 17%);
  position: relative;
  z-index: 2;
`;

export const InnerContainer = styled.div`
  z-index: 3;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  position: absolute;
  bottom: 80px;
  gap: 10px;
`;

export const InfoContainer = styled.div`
  height: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  text-align: center;
`;

export const AvatarContainer = styled.div`
  height: 186px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-align: center; 
  
`;

  export const TextTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  
  margin-top: -30px;
  &::after {
    content: "";
    width: 104px;
    height: 2px;
    background: #fE71F4;
    margin: 4px auto 0;
  }
`;
