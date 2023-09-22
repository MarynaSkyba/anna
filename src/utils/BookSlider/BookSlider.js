import {useState} from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import bookImage1 from '../../images/book/1.webp';
import bookImage2 from '../../images/book/2.webp';
import bookImage3 from '../../images/book/3.webp';
import { FiArrowLeftCircle , FiArrowRightCircle} from "react-icons/fi";
import {BsDot} from "react-icons/bs"
import { Dot, DotsContainer, Arrow, SliderContainer, Slide, Slider } from './BookSliderElements';
import { colors } from '../../styles';

const BookSlider = () => {
const slides = [bookImage1, bookImage2, bookImage3]

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  return (
    <Slider>
      <SliderContainer>
        <Arrow onClick={goToPrevious}>
        <FiArrowLeftCircle color={colors.accent} />
        </Arrow>
        
      <Slide backgroundImage={slides[currentIndex]}></Slide>
      <Arrow onClick={goToNext}>
<FiArrowRightCircle color={colors.accent}/>
        </Arrow>
      </SliderContainer>
      <DotsContainer>
        {slides.map((slide, slideIndex) => (
          <Dot
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            isActive={slideIndex === currentIndex}

          >
<BsDot/>          </Dot>
        ))}
      </DotsContainer>
    </Slider>
  );
};

export default BookSlider;