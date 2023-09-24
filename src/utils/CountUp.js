import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Text =styled.p`
font-weight: 600;
          font-size: 3em;
          color: #fff;
          margin-bottom: 20px;
          @media screen and  (max-width: 1200px) {
  font-size: 1.5em;
  }
 @media screen and  (max-width: 768px) {
  font-size: 2em;
  }
`



const CountUp = ({ start = 0, end }) => {
  const [value, setValue] = useState(null);
  const ref = useRef(start);

  const counter = end / 50;

  const Count = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + counter);
      if (result > end) return setValue(end);
      setValue(result);
      ref.current = result;
    }
    setTimeout(Count, 70);
  };


  useEffect(() => {
    let isMounted = true;
    
    const Count = () => {
      if (ref.current < end) {
        const result = Math.ceil(ref.current + counter);
        if (result > end) return setValue(end);
        setValue(result);
        ref.current = result;
      }
      setTimeout(Count, 70);
    };
  
    if (isMounted) {
      Count();
    }
    return () => (isMounted = false);
  }, [end]);
  return (
        <>
          <Text
          >
            {value} +
          </Text>
        </>
      );
}

//   useEffect(() => {
//     let isMounted = true;
//     if (isMounted) {
//       Count();
//     }
//     return () => (isMounted = false);
//   }, [end]);

//   return (
//     <>
//       <Text
//       >
//         {value} +
//       </Text>
//     </>
//   );
// };
export default CountUp;



