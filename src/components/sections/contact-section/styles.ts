import Typography from "@/components/typography";
import { theme } from "@/helpers/theme";
import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 12rem clamp(1rem, 4rem, 4rem) 16rem;
  width: 100%;
  margin-top: -45rem;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  gap: 140px;

  @media (max-width: 760px) {
    gap: 66px;
    padding: 8rem 1rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;

  @media (max-width: 760px) {
    flex-direction: column;
    gap: 37px;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  text-align: center;
`;

export const TypographyCustomLeftContainer = styled(Typography)`
  max-width: 327px;
  @media (max-width: 760px) {
    order: 2;
  }
`;
export const RightContainer = styled.div`
  background-color: ${theme.background};
  max-width: 562px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 15px;
`;

export const TypographyCustom = styled(Typography)`
  padding: 10px 30px;
  border-bottom: 2px solid ${theme.primary};
`;

export const TextInput = styled.input`
  background-color: #13238d;
  border: none;
  width: 100%;
  min-height: 43px;
  color: #fff;
  padding: 10px;
`;

export const DescriptionTextInput = styled.textarea`
  background-color: #13238d;
  border: none;
  width: 100%;
  min-height: 190px;
  color: #fff;
  padding: 10px;
`;

export const ButtonContainer = styled.div`
  height: 43px;
  width: 223px;
  margin-top: 10px;
`;
