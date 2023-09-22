import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { Link } from "react-scroll";
import { GiLotus } from "react-icons/gi";
import {colors} from "../../styles"

export const Nav = styled.nav`
  background: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1300px;

  @media screen and (max-width: 780px) {
    padding: 20px 24px;
  }
`;

export const NavLogo = styled(NavLink)`
  color: ${colors.accent};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cusor: pointer;
    color: ${colors.accent};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(NavLink)`
  color: ${colors.main};
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
 

  &.active {
    /* border-bottom: 3px solid #ec9162; */
    color: ${colors.accent};
  

  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(NavLink)`
  border-radius: 50px;
  background: ${colors.accent};
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${colors.mainGrey};
  }
`;

export const Icon = styled(GiLotus)`
  color: #cce0a9;
`;
