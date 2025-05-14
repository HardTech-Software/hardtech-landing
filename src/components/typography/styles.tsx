import styled, { css } from "styled-components";

interface Props {
  $variant: "h1" | "h2" | "h3" | "title" | "description1" | "description2";
}

const variantStyles = {
  h1: css`
    font-size: 40px;
    line-height: 2.5rem;
    font-weight: 700;
    padding-bottom: 0.6rem;
    color: ${({ theme }) => theme.white};

    @media (min-width: 1024px) {
      font-size: 55px;
      line-height: 3rem;
    }
  `,
  h2: css`
    font-size: 40px;
    line-height: 1.6rem;
    font-weight: 700;
    background-color: ${({ theme }) => theme.primary};
    color: #262626;
    padding: 5px 0 0.6rem 0;

    @media (min-width: 1024px) {
      font-size: 55px;
      line-height: 3rem;
    }
  `,
  h3: css`
    font-size: 40px;
    line-height: 2rem;
    font-weight: 700;
    padding-bottom: 0.6rem;
    color: ${({ theme }) => theme.white};
  `,
  title: css`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.white};
  `,
  description1: css`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.white};
  `,
  description2: css`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.white};

    @media (min-width: 1024px) {
      font-size: 21px;
    }
  `,
};

export const TypographyStyled = styled.p<Props>`
  ${({ $variant }) => variantStyles[$variant]}
  font-family: ${({ $variant }) =>
    $variant === "title" ||
    $variant === "description1" ||
    $variant === "description2"
      ? "Inter, sans-serif"
      : "Exo 2, sans-serif"};
`;
