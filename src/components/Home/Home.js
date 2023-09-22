import React from "react";
import styled from "styled-components";
import {
  HeroBtnContainer,
  HeroContainer,
  HeroH1,
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

 
       <HeroContainer>
        <HeroBtnContainer>
        <HeroTextContainer>
          <HeroH1>Let's the jorney begins</HeroH1>
          <HeroText>What are you waiting for?</HeroText>
          </HeroTextContainer>
          <Button primary dark uppercase>
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
