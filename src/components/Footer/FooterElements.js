import styled from "styled-components";
import { colors } from "../../styles";

export const FooterContainer = styled.footer`
  background-color: ${colors.main};
  padding: 20px;
  /* height: 80px; */
  display: flex;
  justify-content: space-around;
  align-items: center;

`;

export const Logo = styled.img`
  max-height: 50px;
  width: auto;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const SocialIcon = styled.a`
  font-size: 34px;
  color: ${colors.mainGrey};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${colors.accent};
  }

  @media screen and (max-width: 768px){
    font-size: 24px;

  }

`;

export const TextContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
`
export const Text = styled.p`
  font-size: 1rem;
  text-align: center;
`;
