import React, { ReactNode } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export default MainLayout;
