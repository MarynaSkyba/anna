import React from "react";
import {
  HeroBtnContainer,
  HeroContainer,
  HeroH1,
  HeroH2,
  HeroText,
  HeroImg,
  HeroImgContainer,
  HeroTextContainer
} from "./HomeElemets";
import { Button } from "../../utils/Button";
import Counter from "./Counter";
import Products from "../Products/Products";
import BookInfo from "./BookInfo";
import anna from "../../images/anna.jpeg"





function Home() {
  return (
    <>

 
      <HeroH1>This is a space of transformation for women who are ready to grow, powerful and vibrant</HeroH1>
       <HeroContainer>
        <HeroBtnContainer>
        <HeroTextContainer>
        <HeroH2>This is a space of transformation for women who are ready to grow, powerful and vibrant</HeroH2>

          <HeroText>What are you waiting for?</HeroText>
          </HeroTextContainer>
          <Button $primary $dark $uppercase>
            Tap here to begin
          </Button>
        </HeroBtnContainer>
<HeroImgContainer>
  <HeroImg src={anna} alt="Anna"  />
</HeroImgContainer>
      
      </HeroContainer>

      <Counter />
      <Products /> 
      <BookInfo/>
  
    </>
  );
}

export default Home;
