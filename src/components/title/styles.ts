import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    to right,
    transparent 0%,
    ${theme.primary} 20%,
    ${theme.primary} 80%,
    transparent 100%
  );
  padding: 2.5px 64px;
  text-align: center;

`;
