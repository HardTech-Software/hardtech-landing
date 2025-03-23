import React, { ReactNode } from "react";
import Header from "../header";
import { ContentContainer } from "./styles";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />

      <ContentContainer>{children}</ContentContainer>
    </div>
  );
};

export default Layout;
