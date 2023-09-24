import CountUp from "../../utils/CountUp";
import styled from "styled-components";
import { colors } from "../../styles";

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
 
  @media screen and  (max-width: 1000px) {
    padding: 20px;
  }
  @media screen and  (max-width: 768px) {
    padding: 20px;
  }
`;

const Container = styled.div`
background-color: ${colors.main};
display: flex;
padding: 30px;
justify-content: center;

@media screen and  (max-width: 768px) {
  display: block;
max-width: 300px;
margin-right: auto;
margin-left: auto;
  }

`
const Text =styled.p`
color: #fff;
 font-size: 2em;
 text-align: center;

 @media screen and  (max-width: 1200px) {
  font-size: 1em;
  }
 /* @media screen and  (max-width: 768px) {
  font-size: 1em;
  } */
`

const data = [
  { number: 150, text: "satisfied customers" },
  { number: 1700, text: "hours of sessions" },
  { number: 14, text: "years of studying psychology" },
  { number: 200, text: " reviews on instagram" },
];

const Counter = () => {
  return (
    <Container
    >
      {data.map((item,index) => (
        <CounterContainer
        key={index}>
          <CountUp start={0} end={item.number} />
          <Text>
            
            {item.text}
          </Text>
        </CounterContainer>
      ))}
    </Container>
  );
};

export default Counter;
