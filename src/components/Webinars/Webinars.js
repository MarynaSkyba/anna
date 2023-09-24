import React from "react";
import Icon1 from "../Services/images/webinar1.webp"




import {WebinarsContainer, WebinarsWrapper, WebinarsCard, WebinarsDescription, WebinarsIcon, WebinarsText, BtnLink, WebinarsPrice} from './WebinarsElements';

const data = [
    { title: "Create the desired reality (in recording)", description: "Each webinar is presented by a Anna  give you the opportunity ", icon: Icon1, link: "contact" , price: "99$", select: "Option 1"},
    { title: "Relationships with the opposite sex (in recording)", description: "Secrets you didn't know.ach webinar is presented by a Anna ", icon: Icon1, link: "contact", price: "99$", select: "Option 2" },

  ];

function Webinars() {
  return (
    <WebinarsContainer id="webinars">
      <WebinarsWrapper>
      {data.map((item, index)=> (

        <WebinarsCard key={`${index}-1`}>
          <WebinarsIcon src={item.icon} />
          <WebinarsText>{item.title}</WebinarsText>
          <WebinarsDescription>{item.description}</WebinarsDescription>
          <WebinarsPrice>{item.price}</WebinarsPrice>
          <BtnLink to={`/${item.link}?price=${item.select}`}>Buy</BtnLink>
        </WebinarsCard>

      ))}
      
      </WebinarsWrapper>
    </WebinarsContainer>
  );
}

export default Webinars;