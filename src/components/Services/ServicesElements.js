import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  padding: 20px;

 
`;

export const ServicesHeading = styled.h1`
  font-size: 2.5rem;
  color: ${colors.main};
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 10px;
  align-items: stretch;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    /* padding: 0 20px; */
  }
`;

export const ServiceCardContainer = styled.div`
display: flex;
flex-direction: column;
/* justify-content: space-between; */
align-items: center;
align-content: space-between;
`

export const ServicesCard = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: al 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background: ${colors.ivory};
  }
  @media screen and (max-width: 768px) {
width: 340px;  }
`;

export const ServicesIcon = styled.img`
   height: 200px; 
  width: 100%;
  margin-bottom: 10px;
`;

export const ServicesText = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const ServicesDescription = styled.p`
  font-size: 1rem;
  text-align: center;
margin-bottom: 10px;
padding: 20px;
    

`;


export const BtnLink = styled(Link)`
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
    background: ${colors.mainGrey};
  }
`;