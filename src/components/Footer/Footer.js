import React from "react";
import {
  FooterContainer,
  Logo,
  IconContainer,
  SocialIcon,
  Text,
  TextContainer
} from "./FooterElements";
import { FaInstagram, FaEnvelope } from "react-icons/fa"; // Import the icons you want to use

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src="/path-to-your-logo.png" alt="Logo" />
      <TextContainer>
      <Text>Miami, USA.</Text>
<Text>All rights reserved. 2023</Text>
      </TextContainer>
      <IconContainer>
        <SocialIcon
          href="https://www.instagram.com/___anna_s____/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="mailto:ladyleaderinfo@gmail.com">
          <FaEnvelope />
        </SocialIcon>
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
