// import React from "react";
// import CheckboxGroup from "react-checkbox-group";
// import styled from "styled-components";

// const CustomCheckboxGroupWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const CustomLabel = styled.label`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   font-size: 16px;
// `;

// const CustomCheckboxInput = styled.input.attrs({ type: "checkbox" })`
//   appearance: none;
//   width: 20px;
//   height: 20px;
//   border: 2px solid #007bff;
//   border-radius: 4px;
//   margin-right: 10px;

//   &:checked {
//     background-color: #007bff;
//     border-color: #007bff;
//   }

//   &:checked::after {
//     content: "\2713"; /* Checkmark symbol */
//     color: white;
//     font-size: 16px;
//     line-height: 1;
//     text-align: center;
//     display: block;
//     position: relative;
//     top: -1px;
//   }
// `;

// function OptionSelect() {
//   return (
//     <CheckboxGroup name="options">
//       {(Checkbox) => (
//         <CustomCheckboxGroupWrapper>
//           <CustomLabel>
//             <CustomCheckboxInput as={Checkbox} value="option1" /> Option 1
//           </CustomLabel>
//           <CustomLabel>
//             <CustomCheckboxInput as={Checkbox} value="option2" /> Option 2
//           </CustomLabel>
//           <CustomLabel>
//             <CustomCheckboxInput as={Checkbox} value="option3" /> Option 3
//           </CustomLabel>
//           {/* Add more options as needed */}
//         </CustomCheckboxGroupWrapper>
//       )}
//     </CheckboxGroup>
//   );
// }

// export default OptionSelect;
