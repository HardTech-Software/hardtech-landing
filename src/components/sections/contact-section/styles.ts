import Typography from "@/components/typography";
import { theme } from "@/helpers/theme";
import { styled } from "styled-components";
import { media } from "@/utils/constants/breakpoints";

export const Container = styled.div`
  position: relative;
  padding: 10rem clamp(1rem, 5%, 4rem) 16rem;
  width: 100%;
  margin-top: -50rem;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  gap: 80px;
  z-index: 2;

  @media ${media.max.xxl} {
    padding-top: 10rem;
  }

  @media ${media.max.lg} {
    gap: 50px;
    padding: 9rem 1rem 9rem;
  }

  @media ${media.max.md} {
    padding: 8rem 1rem 8rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  white-space: nowrap;

  h2,
  h1,
  span {
    display: inline-block;
    width: 100%;
  }

  @media ${media.max.xs} {
    font-size: 0.8rem;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media ${media.max.lg} {
    flex-direction: column;
    gap: 40px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const LogoContainer = styled.div`
  width: 100%;
  max-width: 296px;

  svg,
  img {
    width: 100%;
    height: auto;
  }

  @media ${media.max.lg} {
    max-width: 220px;
  }
`;

export const RightContainer = styled.div`
  background-color: #161616;
  width: 100%;
  max-width: 621px;
  display: flex;
  flex-direction: column;
  padding: 31px 23px;
  border-radius: 5px;

  box-shadow: 0px 0px 25px 0px #2441ff;
  box-sizing: border-box;

  @media ${media.max.md} {
    padding: 25px 15px;
  }
`;

export const MainTitle = styled(Typography)`
  margin-bottom: 25px;
  color: ${theme.white};

  strong {
    font-weight: 700;
    color: ${theme.white};
  }

  @media ${media.max.md} {
    text-align: center;
  }
`;

export const TypographyCustom = styled(Typography)`
  display: inline-block;
  position: relative;
  padding-bottom: 6px;
  margin-bottom: 15px;
  align-self: flex-start;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 116px;
    height: 1.64px;
    background-color: ${theme.primary};
  }
`;

export const TextInput = styled.input`
  background-color: #2f2f2f;
  border: none;
  width: 100%;
  height: 35.18px;
  color: #fff;
  padding: 10px 12px;
  font-size: 1rem;
  border-radius: 5px;
  margin-bottom: 15px;
  box-sizing: border-box;

  &::placeholder {
    color: #888;
    opacity: 0.7;
  }
`;

export const DescriptionTextInput = styled.textarea`
  background-color: #2f2f2f;
  border: none;
  width: 100%;
  min-height: 157.09px;
  color: #fff;
  padding: 12px;
  font-size: 1rem;
  resize: vertical;
  border-radius: 5px;
  box-sizing: border-box;

  &::placeholder {
    color: #888;
    opacity: 0.7;
  }
`;

export const ButtonContainer = styled.div`
  height: 35px;
  width: 246px;
  margin-top: 25px;
  align-self: center;
`;

export const SelectInput = styled.select`
  background-color: #2f2f2f;
  border: none;
  width: 100%;
  height: 35.18px;
  color: #fff;
  padding: 0 12px;
  font-size: 1rem;
  border-radius: 5px;
  margin-bottom: 15px;
  box-sizing: border-box;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;

  option {
    background-color: #2f2f2f;
    color: #fff;
  }
`;
