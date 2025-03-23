import React from "react";
import { Container, ContainerCenter, ContainerRight } from "./styles";
import Icon from "@/components/icon";
import Typography from "@/components/typography";
import Image from "next/image";

interface ContactSectionProps {
  id: string;
}

const ContactSection = ({ id }: ContactSectionProps) => {
  return (
    <Container id={id}>
      <Icon name="logo" />
      <ContainerCenter>
        <Typography>CONTACTO</Typography>
        <Typography>correobacan@gmail.com</Typography>
      </ContainerCenter>
      <ContainerRight>
        {/* <Icon name="instagram" /> */}
        <Image src="/instagram.svg" width={62} height={62} alt="" />
        <div>
          <Typography>SIGUENOS</Typography>
          <Typography>@hardtech</Typography>
        </div>
      </ContainerRight>
    </Container>
  );
};

export default ContactSection;
