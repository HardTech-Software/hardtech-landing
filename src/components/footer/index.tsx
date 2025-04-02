import React from "react";
import {
  Container,
  ContainerCenter,
  ContainerRight,
  Email,
  TypographyCustom,
} from "./styles";
import Icon from "@/components/icon";
import Typography from "@/components/typography";

interface FooterProps {
  id: string;
}

const Footer = ({ id }: FooterProps) => {
  return (
    <Container id={id}>
      <Icon name="logo" />
      <ContainerCenter>
        <Typography>CONTACTO</Typography>
        <Email href="mailto:correobacan@gmail.com">
          <TypographyCustom>correobacan@gmail.com</TypographyCustom>
        </Email>
      </ContainerCenter>
      <ContainerRight>
        <Icon name="instagram" />
        <div>
          <Typography>SIGUENOS</Typography>
          <Typography>@hardtech</Typography>
        </div>
      </ContainerRight>
    </Container>
  );
};

export default Footer;
