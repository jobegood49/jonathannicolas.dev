import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <div>
      <div>
        <img src="/images/avatar.jpg" alt="Avatar of Jonathan Nicolas" />
        <h1>Hello, I'm Jonathan Nicolas, a web developer</h1>
        <div>
          <button>Contact Me</button>
          <button>Check My Projects</button>
        </div>
        <img src="/images/hero-image.svg" alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
