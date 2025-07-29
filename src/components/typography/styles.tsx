import styled, { css } from "styled-components";

interface Props {
  $variant:
    | "h1"
    | "h2"
    | "h3"
    | "title1"
    | "title2"
    | "title3"
    | "title4"
    | "description1"
    | "description2";
}

const variantStyles = {
  h1: css`
    font-size: 50px;
    font-weight: 800;
    line-height: 1;
    padding-bottom: 9px;

    @media (max-width: 1250px) {
      font-size: 40px;
    }
  `, // titulo home
  h2: css`
    font-size: 45px;
    font-weight: 800;
    line-height: 1;
    padding-bottom: 5px;

    @media (max-width: 1024px) {
      font-size: 35px;
    }
    @media (max-width: 760px) {
      font-size: 30px;
    }
  `, // titulos secciones
  h3: css`
    font-size: 25px;
    font-weight: 900;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  `, //titulos div difuminados
  title1: css`
    font-size: 14px;
    font-weight: 400;
  `, // header sidebar
  title2: css`
    font-size: 14px;
    font-weight: 900;
    @media (max-width: 760px) {
      font-size: 16px;
    }
  `, // titulos nombres

  title3: css`
    font-size: 14px;
    font-weight: 400;
    @media (max-width: 760px) {
      font-size: 16px;
    }
  `, // subtitulos nombres
  title4: css`
    font-size: 16px;
    font-weight: 900;
  `, // titulo correo

  description1: css`
    font-size: 20px;
    font-weight: 400;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  `, // descripciones dentro de los div difuminados
  description2: css`
    font-size: 16px;
    font-weight: 400;
  `, // description del home y seccion proyectos y texto footer
  description3: css`
    font-size: 30px;
    font-weight: 400;
    @media (max-width: 1024px) {
      font-size: 18px;
    }
    @media (max-width: 760px) {
      font-size: 20px;
    }
  `, // texto monito correo
};

export const TypographyStyled = styled.p<Props & { color?: string }>`
  ${({ $variant }) => variantStyles[$variant]}
  font-family: ${({ $variant }) =>
    $variant === "h3" ||
    $variant === "title1" ||
    $variant === "title2" ||
    $variant === "title3" ||
    $variant === "title4" ||
    $variant === "description1" ||
    $variant === "description2"
      ? "Inter, sans-serif"
      : "Exo 2, sans-serif"};
  color: ${({ color }) => color};
`;
