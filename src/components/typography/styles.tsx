import styled, { css } from "styled-components";

interface Props {
  $variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "title1"
    | "title2"
    | "title3"
    | "title4"
    | "title5"
    | "description1"
    | "description2"
    | "description3"
    | "price"
    | "button",
}

const variantStyles = {
  h1: css`
    font-family: "Orbitron", sans-serif;
    font-size: 50px;
    font-weight: 800;
    
    @media (max-width: 1250px) {
      font-size: 40px;
    }
    @media (max-width: 760px) {
      font-size: 32px;
    }
  `,
  h2: css`
    font-family: "Orbitron", sans-serif;
    font-size: 35px;
    font-weight: 900;

    @media (max-width: 1250px) {
      font-size: 30px;
    }
    @media (max-width: 760px) {
      font-size: 24px;
    }
  `,
  h3: css`
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
  `,
  h4: css`
    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-weight: 500;
    @media (max-width: 760px) {
      font-size: 14px;
    }
  `,
  title1: css`
    font-family: "Inter", sans-serif;
    font-size: 20px; 
    font-weight: 900;
  `,
  title2: css`
    font-family: "Inter", sans-serif;
    font-size: 35px;
    font-weight: 800;
   @media (max-width: 1250px) {
      font-size: 36px;
    font-weight: 700;
    }
    @media (max-width: 760px) {
      font-size: 32px;
    font-weight: 700;
    }
  `,
  title3: css`
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 900;
  `,
  title4: css`
    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-weight: 900;
  `,
  title5: css`
    font-family: "Inter", sans-serif;
    font-size: 25px;
    font-weight: 400;
    @media (max-width: 760px) {
      font-size: 20px;
    }
  `,
  description1: css`
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
  `,
  description2: css`
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
  `,
  description3: css`
    font-family: "Inter", sans-serif;
    font-size: 10px;
    font-weight: 400;
  `,
  price: css`
    font-family: "Inter", sans-serif;
    font-size: 32px;
    font-weight: 800;
  `,
  button: css`
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
  `
};

export const TypographyStyled = styled.p<Props & { color?: string }>`
  ${({ $variant }) => variantStyles[$variant]}
  font-family: ${({ $variant }) =>
    $variant === "h3" ||
    $variant === "h4" ||
    $variant === "title1" ||
    $variant === "title2" ||
    $variant === "title3" ||
    $variant === "title4" ||
    $variant === "title5" ||
    $variant === "description1" ||
    $variant === "description3"||
    $variant === "price"||
    $variant === "button"
      ? "Inter, sans-serif"
      : "Exo 2, sans-serif"};
  color: ${({ color }) => color};
`;
