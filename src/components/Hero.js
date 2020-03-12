import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  min-height: 755px;
  background-color: #6b95ff;
  display: flex;
  align-items: center;
`;

const HeroSubContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1400px;
  justify-content: space-around;
`;

const HeroIntro = styled.div`
  min-width: 400px;
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    border-radius: 50%;
  }

  & h1 {
    width: 350px;
    text-align: center;
  }
  /* buttons group */
  & div {
    display: flex;
  }
  & button {
    font-size: 1.3rem;
    background: #56d0d8;
    border-radius: 10px;
    margin: 30px 10px;
    padding: 10px 20px;
    border: none;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroSubContainer>
        <HeroIntro>
          <img src="/images/avatar.jpg" alt="Avatar of Jonathan Nicolas" />
          <h1>Hello, I'm Jonathan Nicolas, a web developer</h1>
          <div>
            <button>Contact Me</button>
            <button>Check My Projects</button>
          </div>
        </HeroIntro>
        <img src="/images/hero-image.svg" alt="Hero" />
      </HeroSubContainer>
    </HeroContainer>
  );
};

export default Hero;
