import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink
  
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";
const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/" offset={-80} duration={500}>
            Anna
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <div>
            <NavMenu>
            <NavItem> 
                <NavLinks to="/"  offset={-80} duration={500}>
Home                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about" offset={-80} duration={500}>
                  about me
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/webinars"
                  
                  offset={-80}
                  duration={500}
                >
                  Webinars
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/products"
                
                  offset={-80}
                  duration={500}
                >
                  Products
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/book"
                  offset={-80}
                  duration={500}
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
