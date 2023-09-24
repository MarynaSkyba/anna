import React from "react";
import styled from "styled-components";
import { AboutContainer, DescriptionTextContainer, BoldTitleText, BoldText, DescriptionText, ImgContainer, Img, Quote, QuoteContainer } from "./AboutElements";
import anna from "../../images/anna.jpeg"


export default function About() {
return (
  <AboutContainer>
   <ImgContainer $large={true}>
<Img src={anna} alt="Elena Tararina"  />
</ImgContainer> 

<QuoteContainer>
  <Quote>"Life is too short to live unhappy"</Quote>
</QuoteContainer>

    <DescriptionTextContainer>
<BoldTitleText>
LET ME INTRODUCE

</BoldTitleText>
<BoldText>
Anna
~ Certified Coach
~ Author of the book "Lady Leader's Diary"
~ She has devoted more than 12 years to the study of neuropsychology, coaching, esotericism, spiritual practices, NLP
~ Conducted more than 1,500 consultations and analyzes

</BoldText>


<DescriptionText>
I believe that mental health care is a right, not a privilege. Anyone who needs counseling should have it. It is a belief i have lived for more than 10 years by providing affordable, sliding-scale counseling to people in need for as long as they need care.

</DescriptionText>
    </DescriptionTextContainer>
    
 

 </AboutContainer>
);
}
