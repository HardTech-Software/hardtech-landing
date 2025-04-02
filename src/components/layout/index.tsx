import React, { ReactNode } from "react";
import Header from "../header";
import { ContentContainer } from "./styles";
import Footer from "../footer";
import Background from "../background";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Background />
      <ContentContainer>{children}</ContentContainer>

      <Footer id="footer" />
    </>
  );
};

export default Layout;
