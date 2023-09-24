import styled from 'styled-components';
import {colors} from "../../styles.js"


export const Slide = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.$backgroundImage});

`;

export const SliderContainer = styled.div`
display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    `

export const Arrow = styled.div`

  font-size: 45px;
  z-index: 1;
  cursor: pointer;
`;


export const Slider = styled.div`
  height: 100%;
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;

`;

export const Dot = styled.span`
  margin: 0 5px;
  cursor: pointer;
  font-size: 20px;
  color: ${(props) => (props.$isActive ? colors.accent : colors.grey)};
  border-radius: 50;
`;


