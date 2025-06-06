import styled from "styled-components";
import Typography from "../typography";
import { theme } from "@/helpers/theme";

export const Container = styled.div`
  max-width: 404px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${theme.background};
  box-shadow: 10px 18px 24px rgba(0, 0, 0, 0.8);
  text-align: center;
`;
export const TypographyCustom = styled(Typography)`
  background-color: ${theme.secondary};
  padding: 9px 14px;
  margin-bottom: 46px;
  display: inline-block;
`;
