import React, { ReactNode } from "react";
import Header from "../header";
import { ContentContainer, HeaderContainer } from "./styles";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <ContentContainer>{children}</ContentContainer>
    </div>
  );
};

export default Layout;
