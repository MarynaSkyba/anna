import React from "react";
import Icon1 from "../Services/images/coaching1.jpeg"
import Icon2 from "../Services/images/mentoring.jpeg"
import Icon3 from "../Services/images/course.jpeg"

import {  IoCheckmarkDoneOutline } from "react-icons/io5"; // Import the icons you want to use
import { colors } from "../../styles";


import {ProductsContainer, ProductsWrapper, ProductsCard, ProductsDescription, ProductsIcon, ProductsText, BtnLink, ProductsPrice, StepContainer} from './ProductsElements';

const data = [
    { title: "Coaching", description: "1 session includes 3 hours of individual work:",  plan: [
      "1.5 hours session itself",
      "30 minutes summarizing the session",
      "1 hour review of your homework",
    ], icon: Icon1, link: "contact" , price: "350$", select: "Option 5"},
    { title: "Mentoring", description: "1 session includes 3 hours of individual work:", 
    plan: [
      "2.5 months of deep work",
 "6 sessions, homework, real life training",
 "18 hours of work",
     
    ], icon: Icon2, link: "contact", price: "1999$", select: "Option 6" },
    { title: "Course “Own boarders”", description: "What you will get:", 
    plan: [
      "5 hours of useful information",
 "Additional Information",
 "hometasks",
 "possibility of viewing in accelerated mode",
     
    ], icon: Icon3, link: "contact", price: "59$", select: "Option 7" },
    { title: "Course “Metaphysics of Money” ", description: "Who will benefit:", 
    plan: [
      "only for women",
 "who do not yet have a net worth of $1 million.",
 "for developing and seeking women.",
 "who want more, more powerful, more luxurious",
     
    ], icon: Icon3, link: "contact", price: "113$" , select: "Option 8"},
  ];

function Products() {
  return (
    <ProductsContainer id="Products">
      <ProductsWrapper>
      {data.map((item)=> (

        <ProductsCard>
          <ProductsIcon src={item.icon} />
          <ProductsText>{item.title}</ProductsText>
          <ProductsDescription>{item.description}</ProductsDescription>
          {item.plan.map((step) => (
            <StepContainer>
<IoCheckmarkDoneOutline color={colors.accent} size={30}/>
          <p>{step}</p>
            </StepContainer>

          ))}
          <ProductsPrice>{item.price}</ProductsPrice>
          <BtnLink to={`/${item.link}?price=${item.select}`}>Buy</BtnLink>
        </ProductsCard>

      ))}
      
      </ProductsWrapper>
    </ProductsContainer>
  );
}

export default Products;