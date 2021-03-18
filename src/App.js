import React from "react";
import styled from "@emotion/styled";
import { Container } from "react-bootstrap";

import { Header } from "./components/header";
import { Hero } from "./components/hero";

const Wrapper = styled("div")`
  background: ${(props) => props.theme.background};
  width: 100vw;
`;

const App = () => {
  return (
    <Wrapper>
      <Container fluid>
        <Header />
        <Hero />
      </Container>
    </Wrapper>
  );
};

export default App;
