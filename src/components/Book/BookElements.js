import styled from "styled-components";
import { colors } from "../../styles";
import { NavLink } from "react-router-dom";


export const BookMainContainer = styled.div`
@media screen and (max-width: 768px) {
  max-width: 500px;

}
`

export const MainBookContainer = styled.div`
  background-color: ${colors.ivory};
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {

    display:block;
}
`;

export const MainReviewContainer = styled.div`
  background-color: ${colors.ivory};
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display:block;
}
`;




export const TitleTextContainer = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color: ${colors.main};

@media screen and (max-width: 768px) {
  display: block;
}
  `;
export const TitleText = styled.p`
  color:  ${colors.white};
text-transform: uppercase;
  font-size: 32px;
  padding: 20px;
  font-weight: 700;
  text-align: center;
  `;

  export const BoldText =styled.p`
  font-weight: 900;
  margin-bottom: 40px;

  `

export const BoldTitleText =styled.p`
font-weight: 900;
margin-bottom: 40px;
font-size: 40px;
color: ${colors.accent};

`;



export const DescriptionText = styled.p`
color:  ${colors.mainGrey};
font-size: 1.3rem;
`;
export const DescriptionTextContainer = styled.div`
padding: 20px;
`;



//BookInfo Css

export const BookInfoContainer = styled.div`
display: flex;
justify-content: center;
background-color: ${colors.ivory};
border-radius: 30px;
padding: 30px;
margin-bottom: 20px;

@media screen  and (max-width: 768px){
  display: block;
}
`;

export const ImgContainer = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    max-width: ${(props) => (props.large ? '800px' : '300px')};
    @media screen and (min-width: 768px) {
     flex: 1;
    }
`;

export const Img = styled.img`
   max-width: 100%;
  max-height: 100%;
  object-fit: cover;
    @media screen and (max-width: 768px) {
    }
    `


export const BookSliderContainer = styled.div`
    max-width: 850px;
    height: 680px;
    margin: 0 auto;
    margin-bottom: 40px;
    
    @media screen and (max-width: 1200px) {
      max-width: 700px;
    height: 680px;
    }

    @media screen and (max-width: 768px) {
      max-width: 400px;
    height: 580px;
    }`

// export const BookContainer = styled.div`
//     display: flex;
//     margin-left: auto;
//     margin-right: auto;
//     margin-bottom: 20px;
//     max-width: 300px;
//    @media screen and (min-width: 768px) {
//      flex: 1;

//     }

// `;

    

export const BookInfoH3= styled.h3`
color: ${colors.accent};
font-size: 20px;
text-transform: uppercase;
margin-bottom: 20px;
font-weight: 900;
  `;

  export const BookTextContainer= styled.div`
padding-left: 20px;
padding-right: 20px;
flex: 1;
  `;

  export const BookInfoTitle= styled.p`
  color: ${colors.white};
  font-size: 14px;  
  text-transform: uppercase;
color: ${colors.grey};
font-weight: 700;
margin-bottom: 10px;
    `;

export const BookInfoDescription= styled.p`
color: ${colors.mainGrey};
font-size: 16px;
margin-bottom: 20px;
  `;


  export const BtnLink = styled(NavLink)`
  border-radius: 50px;
  background: ${colors.accent};
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  text-decoration: none;



  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${colors.white};
  }
`;


export const BtnContainer = styled.div`
display: flex;
justify-content: flex-start;
padding: 10px;
@media screen and (max-width: 768px){
  justify-content: center;
}
`



export const BtnOrderContainer = styled.div`
display: flex;
justify-content: flex-end;
padding: 24px;
background-color: ${colors.ivory};
@media screen and (max-width: 768px){
  display: block;
}
`

export const Btn = styled.div`
border-radius: 50px;
  background: ${colors.accent};
  padding: 10px 22px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  font-size: 14px;
  margin-left: 30px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;


  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${colors.white};
  }
`;