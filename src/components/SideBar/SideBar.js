import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SideBtnWrap,
  SidebarRoute,
  SidebarMenu,
  IconContainer,
  SocialIcon
} from "./SidebarElements";
import { FaInstagram, FaEnvelope } from "react-icons/fa"; // Import the icons you want to use


function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer open={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <div>
        <SidebarMenu>
        <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>

          <SidebarLink to="about" onClick={toggle}>About me</SidebarLink>
          <SidebarLink to="webinars" onClick={toggle}>Webinars</SidebarLink>
          <SidebarLink to="products" onClick={toggle}>Products</SidebarLink>
          <SidebarLink to="book" onClick={toggle}>My Book</SidebarLink>

        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contact">Contact me</SidebarRoute>
        </SideBtnWrap>
        <IconContainer>
        <SocialIcon
          href="https://instagram.com/___anna_str____"
        >
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="mailto:ladyleaderinfo@gmail.com">
          <FaEnvelope />
        </SocialIcon>
      </IconContainer>
      </div>

    </SidebarContainer>
  );
}

export default Sidebar;