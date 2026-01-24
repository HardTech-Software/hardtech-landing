import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  gap: 1px;
  transition: gap 0.4s ease;
  justify-content: center;
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(5, 220px);
  }

  @media (min-width: 768px) and (max-width: 1399px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    justify-items: center;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  padding: 0px 20px;
  min-height: 600px;

  @media (min-width: 1080px) {
    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      pointer-events: none;

      width: min(1301px, 90vw);
      height: min(340px, 50vh);

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      background: radial-gradient(
        50% 50% at 50% 50%,
        #FE71F4 0%,
        rgba(254, 113, 244, 0.0414663) 95.67%,
        rgba(254, 113, 244, 0) 100%
      );

      filter: blur(40px);
      opacity: 0.85;

      transition: opacity 0.6s ease;
    }
  }
`;
