import Typography from "@/components/typography";
import { theme } from "@/helpers/theme";
import styled, { css, keyframes } from "styled-components";
import { media } from "@/utils/constants/breakpoints";

const scrollFadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const scrollFadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 125vh;
  position: relative;
  z-index: 0;
  padding: 15rem 0 60rem 0;

  @media ${media.max.lg} {
    padding: 0rem 0 52rem 0;
  }

  @media ${media.max.md} {
    padding: 0rem 0 50rem 0;
  }
`;

export const Background = styled.div`
  height: 1500px;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  left: 0;
`;

export const CircuitsContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 0px;
  width: 160px;
  height: 240px;
  opacity: 0.7;
  z-index: 1;

  @media ${media.max.md} {
    left: -20px;
    width: 110px;
    height: 130px;
    opacity: 0.5;
  }

  @media ${media.max.xs} {
    display: none;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 80px;
  align-items: flex-start;
  z-index: 2;
  padding-top: 9vh;

  @media ${media.max.lg} {
    padding-top: 24vh;
  }
  @media ${media.max.md} {
    padding-top: 30vh;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media ${media.max.lg} {
    width: 100%;
    max-width: 760px;
    padding: 0 24px;
    margin: 0 auto;
  }

  @media ${media.max.md} {
    order: 2;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 1024) {
  }
`;

export const TypographyTitleCustom = styled(Typography)`
  text-align: center;
  width: 100%;
  margin: 0 auto;

  @media ${media.max.lg} {
    max-width: 760px;
    white-space: normal;
    word-wrap: break-word;
  }

  @media ${media.min.lg} {
    white-space: nowrap;
  }
`;

export const SecondLine = styled.span`
  display: inline;

  @media ${media.max.lg} {
    display: block;
  }
`;

export const HighlightedText = styled.span`
  background: linear-gradient(
    to right,
    transparent 0%,
    ${theme.primary} 0%,
    ${theme.primary} 75%,
    transparent 100%
  );
  background-size: 110% 100%;
  background-position: left center;
  padding: 0px 10px 4px 4px;
  display: inline;
  white-space: normal;
  word-break: break-word;
  color: #000000;
`;

export const TypographyCustom = styled(Typography)`
  max-width: 1000px;
  text-align: center;
  margin: auto;
  width: 100%;

  @media ${media.max.lg} {
    max-width: 520px;
    padding: 0 20px;
    margin: 20px;
  }

  @media ${media.max.md} {
    max-width: 300px;
    padding: 0 20px;
  }
`;

/* ─────────────────────────────────────────────────────────────────
 * SCROLL CUE — Chevrones en cascada
 * ───────────────────────────────────────────────────────────────── */

const chevronCascade = keyframes`
  0%, 55%, 100% { opacity: 0.2;  transform: rotate(45deg); }
  27%            { opacity: 1;    transform: rotate(45deg) translate(2px, 2px); }
`;

export const ScrollCue = styled.button<{ $hidden?: boolean }>`
  position: fixed;
  left: 50%;
  top: calc(100vh - 8rem);
  transform: translateX(-50%);
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  pointer-events: ${({ $hidden }) => ($hidden ? "none" : "auto")};
  opacity: 0;
  animation: ${({ $hidden }) =>
    $hidden
      ? css`
          ${scrollFadeOut} 0.35s ease forwards
        `
      : css`
          ${scrollFadeIn} 0.7s ease 0.72s forwards
        `};

  &:focus-visible {
    outline: 2px solid ${theme.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }

  @media ${media.max.lg} {
    top: calc(100vh - 7rem);
  }

  @media ${media.max.md} {
    top: auto;
    bottom: 1.15rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: max-content;
    transform: none;
    gap: 0.3rem;
    padding: 0.25rem 0.65rem;
  }
`;

export const ScrollCueLabel = styled.span`
  font-size: 0.58rem;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 0.2rem;

  @media ${media.max.md} {
    font-size: 0.48rem;
    letter-spacing: 0.22em;
    margin-bottom: 0.08rem;
  }
`;

export const ScrollCueChevron = styled.span<{ $delay?: number }>`
  width: 0.65rem;
  height: 0.65rem;
  border-right: 1.8px solid rgba(255, 255, 255, 0.65);
  border-bottom: 1.8px solid rgba(255, 255, 255, 0.65);
  transform: rotate(45deg);
  animation: ${chevronCascade} 1.8s ease-in-out infinite;
  animation-delay: ${({ $delay = 0 }) => $delay}s;

  @media ${media.max.md} {
    width: 0.5rem;
    height: 0.5rem;
    border-right-width: 1.4px;
    border-bottom-width: 1.4px;
  }
`;
