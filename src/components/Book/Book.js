import React from "react";
import { BookMainContainer,BookSliderContainer, MainReviewContainer,MainBookContainer, BoldTitleText, TitleText, TitleTextContainer, DescriptionText, DescriptionTextContainer, BoldText ,Img, ImgContainer , BtnOrderContainer, BtnLink, Btn} from "./BookElements";
import BookSlider from "../../utils/BookSlider/BookSlider";
import YouTubeVideo from "../../utils/YoutubeVideo";
import book from "./images/book.png"
import revision from "./images/revision.jpeg"


export default function Book() {
  return (
<BookMainContainer>

    <TitleTextContainer>
      <TitleText>doctrine of self-knowledge</TitleText>
    </TitleTextContainer>

  <MainBookContainer>
  <ImgContainer $large={false} >
<Img src={book} alt="Book"  />
</ImgContainer>
    <DescriptionTextContainer>
      <DescriptionText>
      The main goal of the book is to help a woman love herself and accept herself.
The book is imbued with wisdom and spirituality.
Written “without water,” briefly and with respect for the reader’s time.
The author helps the reader master the skills of self-analysis.

The book is relevant for women in the post-Soviet space and it is unique in its combination of neuropsychology, coaching and spirituality.
The best tools were taken from each direction, and the author also created his own personal techniques, exercises and tools.
40 exercises that you can do right in the book, space is allocated for this in each chapter.
      </DescriptionText>
    </DescriptionTextContainer>
  </MainBookContainer>

    <BtnOrderContainer>
    <Btn>
<BtnLink to={`/contact?price=Option 3`}>Order print book </BtnLink>
    </Btn>
    <Btn>
<BtnLink to={`/contact?price=Option 4`}>Order online book</BtnLink>
    </Btn>
</BtnOrderContainer>
  

<BookSliderContainer>
  <BookSlider />
</BookSliderContainer>
  


  <MainReviewContainer>
    <DescriptionTextContainer>
<BoldTitleText>
Review
</BoldTitleText>
<BoldText>
Elena Tararina
Leadership trainer. Psychologist.
Art therapist. PhD. Wrote 28 books.

</BoldText>

<DescriptionText>
“Self-knowledge is a long journey of education. Every stage along the way is full of surprises and obstacles.
This book is about how to become someone who can, wants and does everything for the happiness of oneself and others.
This book is a challenge.
It is very important in the rush of life not to miss this quiet heart call of your destiny.”
</DescriptionText>
    </DescriptionTextContainer>
    
    <ImgContainer $large={true}>
<Img src={revision} alt="Elena Tararina"  />
</ImgContainer> 

 </MainReviewContainer>
    <YouTubeVideo />
  </BookMainContainer>
  )
}
