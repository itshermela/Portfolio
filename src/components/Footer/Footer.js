import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillSkype } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>LinkedIn</LinkTitle>
          <LinkItem href="https://www.linkedin.com/in/hermela-getnet-407ab9211">
            Hermela Getnet
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:hermelagetbel@gmail.com">
            hermerlagetnet90@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            "Success is no accident. It is hard work, perserverance, learning, studying, sacrifice and most of all love of what you are doing or learning to do"- PELE
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/itshermela">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/hermela-getnet-407ab9211">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://join.skype.com/invite/Mn5FiesB1Aav">
            <AiFillSkype size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
