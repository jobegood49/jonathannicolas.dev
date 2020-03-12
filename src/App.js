import React from "react";
import styled from "styled-components";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Bio from "./components/Bio";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Container>
      <Navigation></Navigation>
      <Hero></Hero>
      <Bio></Bio>
    </Container>
  );
};

export default App;
