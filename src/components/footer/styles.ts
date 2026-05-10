import styled from "styled-components";
import { theme } from "@/helpers/theme";
import { media } from "@/utils/constants/breakpoints";

export const Container = styled.footer`
  position: relative;
  width: 100%;
  z-index: 1;
  overflow-x: clip;
  background: ${theme.black};
  background-image:
    radial-gradient(
      ellipse 120% 80% at 50% -20%,
      rgba(36, 65, 255, 0.14) 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse 70% 50% at 100% 100%,
      rgba(254, 113, 244, 0.06) 0%,
      transparent 50%
    );
  padding: 3rem clamp(1.25rem, 4vw, 2.5rem) 2rem;
`;

export const Inner = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  width: 100%;
`;

export const TopGrid = styled.div`
  display: grid;
  gap: 2rem 2.25rem;
  width: 100%;

  @media ${media.max.md} {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }

  @media ${media.min.md} and ${media.max.lg} {
    grid-template-columns: 1fr 1fr;
    align-items: start;

    & > :first-child {
      grid-column: 1 / -1;
      justify-self: center;
      text-align: center;
    }
  }

  @media ${media.min.lg} {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr) minmax(0, 1.15fr);
    align-items: start;
  }
`;

export const BrandBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${media.min.lg} {
    align-items: flex-start;
  }
`;

/** Agrupa logo + tagline con ancho “apretado” al logo y texto centrado bajo el centro óptico del mark. */
export const BrandStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.55rem;
  max-width: 100%;
`;

export const LogoButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  transition: filter 0.25s ease, opacity 0.25s ease;

  &:hover {
    filter: drop-shadow(0 0 10px rgba(36, 65, 255, 0.35));
  }

  &:focus-visible {
    outline: 2px solid ${theme.secondary};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

export const Tagline = styled.p`
  margin: 0;
  max-width: 14rem;
  font-family: Inter, sans-serif;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.42;
  color: ${theme.white2};
  letter-spacing: 0.02em;
  text-align: center;
  text-wrap: balance;
  /* Ligero compensación óptica: el mark lleva más peso visual hacia la punta superior del hex. */
  transform: translateX(-0.08rem);

  @media ${media.max.md} {
    max-width: 15rem;
    transform: translateX(-0.06rem);
  }
`;

export const NavBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 0;

  @media ${media.max.md} {
    align-items: center;
  }

  @media ${media.min.md} and ${media.max.lg} {
    align-items: flex-start;
    text-align: left;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: flex-start;

  @media ${media.max.md} {
    align-items: center;
  }
`;

export const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 2.5rem;
  padding: 0.2rem 0;
  font-family: Inter, sans-serif;
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${theme.white2};
  text-decoration: none;
  letter-spacing: 0.03em;
  transition: color 0.2s ease, text-shadow 0.2s ease;

  &:hover {
    color: ${theme.white};
    text-shadow: 0 0 12px rgba(254, 113, 244, 0.25);
  }

  &:focus-visible {
    outline: 2px solid ${theme.secondary};
    outline-offset: 3px;
    border-radius: 2px;
  }
`;

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  min-width: 0;

  @media ${media.max.md} {
    align-items: center;
    text-align: center;
  }

  @media ${media.min.md} and ${media.max.lg} {
    align-items: flex-start;
    text-align: left;
  }

  @media ${media.min.lg} {
    align-items: flex-end;
    text-align: right;
  }
`;

export const ContactLabel = styled.span`
  font-family: Inter, sans-serif;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
`;

export const ContactEmail = styled.a`
  font-family: Inter, sans-serif;
  font-size: 0.8125rem;
  font-weight: 400;
  color: ${theme.white2};
  text-decoration: none;
  transition: color 0.2s ease, text-shadow 0.2s ease;
  word-break: break-word;

  &:hover {
    color: ${theme.white};
    text-shadow: 0 0 12px rgba(36, 65, 255, 0.35);
  }

  &:focus-visible {
    outline: 2px solid ${theme.secondary};
    outline-offset: 3px;
    border-radius: 2px;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const InstagramLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: Inter, sans-serif;
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${theme.white2};
  text-decoration: none;
  transition: color 0.2s ease, filter 0.2s ease;

  &:hover {
    color: ${theme.white};
    filter: drop-shadow(0 0 8px rgba(254, 113, 244, 0.35));
  }

  &:focus-visible {
    outline: 2px solid ${theme.secondary};
    outline-offset: 3px;
    border-radius: 2px;
  }

  svg {
    flex-shrink: 0;
  }
`;

export const Divider = styled.div`
  margin-top: 2.25rem;
  margin-bottom: 1.25rem;
  height: 1px;
  width: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.08) 20%,
    rgba(255, 255, 255, 0.12) 50%,
    rgba(255, 255, 255, 0.08) 80%,
    transparent 100%
  );
`;

export const Copyright = styled.p`
  margin: 0;
  font-family: Inter, sans-serif;
  font-size: 0.6875rem;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.45);
  text-align: center;
  letter-spacing: 0.04em;
`;
