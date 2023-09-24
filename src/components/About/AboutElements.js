import styled from "styled-components";
import { colors } from "../../styles";


export const AboutContainer = styled.div`
  background-color: ${colors.ivory};
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display:block;
}`

export const DescriptionTextContainer = styled.div`
padding: 20px;
`;

export const BoldText =styled.p`
font-weight: 900;
margin-bottom: 30px;
font-size: 1.3rem;
color:  ${colors.mainGrey};


`

export const BoldTitleText =styled.p`
font-weight: 700;
margin-bottom: 30px;
font-size: 20px;
color: ${colors.accent};

`;

export const DescriptionText = styled.div`
color:  ${colors.mainGrey};
font-size: 1.3rem;
`;

export const ImgContainer = styled.div`
    /* display: flex;
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
    overflow: hidden;
   border-radius: 200px 0;
   margin: 20px; */
   flex: 1;
   border-radius: 200px 0;
   overflow: hidden;
   max-width: 500px;
   margin: 40px;
   position: relative;
    @media screen and (max-width: 768px) {
     /* display: flex; */
    margin-left: auto;
    margin-right: auto;
    border-radius: 400px 0;

    }
`;

export const Img = styled.img`
   max-width: 100%;
  max-height: 100%;
  object-fit: cover;
    @media screen and (max-width: 768px) {
    }
    `

export const QuoteContainer = styled.div`
position: absolute;
bottom: 0;
left: 30%;
padding: 40px;
border-radius: 0 50%;
max-width: 200px;
background-color: ${colors.white};
border: 0.5px solid ${colors.accent};
@media screen and (max-width: 768px) {
  right: 15px;
 
}
`

export const Quote = styled.p`
font-weight: 500;
font-size: 1.5rem;
color: ${colors.mainGrey}
`


