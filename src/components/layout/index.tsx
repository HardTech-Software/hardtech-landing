import React, { ReactNode } from "react";
import Header from "../header";
import { ContentContainer } from "./styles";
import Footer from "../footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer id="footer" />
    </>
  );
};

export default Layout;
