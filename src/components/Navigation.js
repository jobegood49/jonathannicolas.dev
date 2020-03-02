import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
`;

const NavListItem = styled.li`
  margin: 10px;
`;

const Navigation = () => {
  return (
    <Nav>
      <h1>Jonathan Nicolas</h1>
      <NavList>
        {/* NavListItem */}
        <NavListItem>
          <a href="/about">About</a>
        </NavListItem>
        <NavListItem>
          <a href="/contact">Contact</a>
        </NavListItem>
        <NavListItem>
          <a href="/projects">Projects</a>
        </NavListItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
