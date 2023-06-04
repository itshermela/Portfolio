import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillSkype } from "react-icons/ai";
import { DiCodeigniter } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
          <DiCodeigniter size="3rem" /> <Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/itshermela">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/hermela-getnet-407ab9211">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://join.skype.com/invite/Mn5FiesB1Aav">
        <AiFillSkype size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
