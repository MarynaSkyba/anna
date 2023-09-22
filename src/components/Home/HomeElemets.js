import styled from "styled-components";
import { colors } from "../../styles";
import anna from "../../images/anna.jpeg"

export const HeroContainer = styled.div`

background-color: ${colors.mainGrey};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
    display: block;
        height: 600px;
        max-width: 500px;
        margin: 0 auto;
        background: url(${anna}) center center/cover no-repeat;
  }

`;

export const HeroTextContainer = styled.div`
background-color: none;
border-radius: 20px;
padding: 0 15px;
@media screen and (max-width: 768px) { 
  background-color: rgba(${parseInt(colors.ivory.slice(1, 3), 16)}, ${parseInt(colors.ivory.slice(3, 5), 16)}, ${parseInt(colors.ivory.slice(5, 7), 16)}, 0.5); /* Ivory background color with 50% opacity */


  }
`

export const HeroH1 = styled.h1`
  color: ${colors.white};
  font-size: 4rem;
  @media screen and (max-width: 768px) { 
    font-size: 3.0rem;
    color: ${colors.grey};

  }
  
`;

export const HeroText = styled.p`
  margin-top: 8px;
  color:  ${colors.white};
  margin-bottom: 32px;
  font-size: 32px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    color:  ${colors.grey};

  }
`;

export const HeroBtnContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  @media screen and (max-width: 768px) {
  position: absolute;
  bottom: 0;
  padding: 30px;
  max-width: 440px;


}


`;

export const HeroImgContainer = styled.div`
flex: 1;
@media screen and (max-width: 768px) {
    display: none;

  }
  
`;

export const HeroImg = styled.img`
  max-width: 100%;
  height: auto;
  /* object-fit: cover; */

`;


