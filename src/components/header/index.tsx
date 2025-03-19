"use client";
import React from "react";
import { Container, Item, Logo, Nav } from "./styles";
import Typography from "../typography";
import Image from "next/image";

const Header = () => {
  return (
    <Container>
      <Logo>
        <Image src="/logo.svg" width={88} height={97} alt="" />
      </Logo>
      <Nav>
        <Item>
          <Typography variant="title">HOME</Typography>
        </Item>
        <Item>
          <Typography variant="title">NUESTROS PROYECTOS</Typography>
        </Item>
        <Item>
          <Typography variant="title">Q&A</Typography>
        </Item>
        <Item>
          <Typography variant="title">CONTACTO</Typography>
        </Item>
      </Nav>
    </Container>
  );
};

export default Header;
