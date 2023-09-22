import React from "react";
import { BookInfoContainer,BookTextContainer, BookInfoH3, BookInfoTitle, BookInfoDescription, BtnLink, Img, Btn, ImgContainer} from "../Book/BookElements"
import book from "../Book/images/book.png"

export default function BookInfo() {
  return (
<BookInfoContainer>
<ImgContainer>
<Img src={book} alt="Book" large={false} />

</ImgContainer>
<BookTextContainer>
<BookInfoTitle>My book</BookInfoTitle>
<BookInfoH3>doctrine of self-knowledge</BookInfoH3>

<BookInfoDescription>

The author helps the reader master the skills of self-analysis.

The book is relevant for women in the post-Soviet space and it is unique in its combination of neuropsychology, coaching and spirituality.
</BookInfoDescription>
<BookInfoDescription>The main goal of the book is to <strong>help a woman love and accept herself</strong>.
The book is imbued with wisdom and spirituality.
Written “without water,” briefly and with respect for the reader’s time.
</BookInfoDescription>
<BookInfoDescription>
The best tools were taken from each direction <strong>40 exercises that you can do right in the book</strong>, space is allocated for this in each chapter.</BookInfoDescription>

<Btn>
<BtnLink to="/contact">Order now</BtnLink>
</Btn>
</BookTextContainer>
    
</BookInfoContainer>)}