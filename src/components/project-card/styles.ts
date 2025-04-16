import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0 4rem 0;
`;

export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 37rem;
  gap: 20px;
  padding-top: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 30px;
  margin-top: 10px;

  @media (max-width: 760px) {
    flex-direction: column;
    gap: 15px;
  }
`;
export const DownloadButtonContainer = styled.div`
  display: flex;
  gap: 30px;
`;
