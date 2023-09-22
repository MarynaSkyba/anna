import React from "react";
import Icon1 from "./images/webinar1.webp"
import Icon2 from "./images/coaching1.jpeg"
import Icon3 from "./images/mentoring.jpeg";
import Icon4 from './images/book.jpeg';



import {ServiceCardContainer, ServicesContainer, ServicesWrapper, ServicesCard, ServicesDescription, ServicesIcon, ServicesText, BtnLink} from './ServicesElements';

const data = [
    { title: "Webinars", description: "Each webinar is presented by a Anna  give you the opportunity to ask questions in our live question and answer sessions. ", icon: Icon1, link: "webinars" },
    { title: "Coaching", description: "Coaching is a form of development in which an experienced person, called a coach, supports a learner or client in achieving ", icon: Icon2, link: "products" },
    { title: "Mentoring", description: "Clarity, Communication, Commitment – the key to successful mentoring programmes. Mentoring", icon: Icon3, link: "products" },
    { title: "Book", description: "The book is filled with wisdom and spirituality.Written without water, concisely and with respect for the reader's time", icon: Icon4, link: "book" },

  ];

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesWrapper>
      {data.map((item)=> (

        <ServicesCard>
          <ServicesIcon src={item.icon} />
          <ServiceCardContainer>
          <ServicesText>{item.title}</ServicesText>
          <ServicesDescription>{item.description}</ServicesDescription>
          <BtnLink to={`/${item.link}`}>Know more</BtnLink>
          </ServiceCardContainer>
        </ServicesCard>

      ))}
      
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;