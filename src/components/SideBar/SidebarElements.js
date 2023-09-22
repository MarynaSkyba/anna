import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";
import { Link } from "react-router-dom";
import { colors } from "../../styles";

export const SidebarContainer = styled.aside`
position:fixed;
z-index: 999;
width: 100%;
height: 100%;
background: ${colors.ivory};
display: grid;
align-items: center;
top:0;
left:0;
transition: 0.2s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
color: ${colors.accent};
`

export const Icon = styled.div`
position: absolute;
top:1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`


export const SidebarWrapper = styled.div`
color: red; //what is it?
`

export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align:center;

@media screen and (max-width:768px) {
grid-template-rows: repeat(6, 60px);
    
}
`

export const SidebarLink = styled(Link)`
display:flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
transition: 0.2s ease-in-out;
color: ${colors.accent};
cursor: pointer;
text-decoration: none;
text-transform: uppercase;


&:hover {
    transition: all 0.2s ease-in-out;
    /* color: #fff; */
 background: #fff;
}
`


export const SideBtnWrap = styled.div`
display:flex;
justify-content: center;`



export const SidebarRoute = styled(Link)`
border-radius: 50px;
background: ${colors.accent};
white-space: nowrap;
padding: 16px 64px;
color: #fff;
font-size: 16px;
font-weight: 700;
outline: none;
border:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
text-transform: uppercase;


&:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.white};
    color: ${colors.mainGrey};
}
`
;

export const IconContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-top: 40px;
`;

export const SocialIcon = styled.a`
  font-size: 34px;
  color: ${colors.mainGrey};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${colors.accent};
  }
`;