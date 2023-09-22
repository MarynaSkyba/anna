import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
// import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Icon,
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";
import { Button } from "../../utils/Button";

const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/" smooth={true} offset={-80} duration={500}>
            Anna
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <div>
            <NavMenu>
            <NavItem> 
                <NavLinks to="/" smooth={true} offset={-80} duration={500}>
Home                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about" smooth={true} offset={-80} duration={500}>
                  about me
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/webinars"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Webinars
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/products"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Products
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/book"
                  smooth={true}
                  offset={-80}
                  duration={500}
                  spy={true}
                >
                  My book
                </NavLinks>
              </NavItem>
            </NavMenu>
          </div>
          <NavBtn>
          <NavBtnLink to="/contact">
            Contact me
          </NavBtnLink>
         
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
