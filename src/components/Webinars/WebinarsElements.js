import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles";

export const WebinarsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
padding : 20px;
`;

export const WebinarsHeading = styled.h1`
  font-size: 2.5rem;
  color: ${colors.main};
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const WebinarsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr ;
  align-items: center;
  grid-gap: 30px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    /* padding: 0 20px; */
  }
`;

export const WebinarsCard = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

export const WebinarsIcon = styled.img`
   height: 200px; 
  width: 100%;
  

  margin-bottom: 10px;
`;

export const WebinarsText = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const WebinarsPrice = styled.p`
  font-size: 2rem;
  margin-bottom: 10px;
  color: ${colors.accent}
`;

export const WebinarsDescription = styled.p`
  font-size: 1rem;
  text-align: center;
margin-bottom: 10px;
padding: 20px;
`;


export const BtnLink = styled(Link)`
width: 60%;
  border-radius: 50px;
  background: ${colors.main};
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
  text-align: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${colors.mainGrey};
  }
`;