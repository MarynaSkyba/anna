import React from "react";
import Select from "react-select";
// import { customStyles } from "./CustomSelectStyles"; // Create custom styles for react-select

const options = [
  { value: "Option1", label: "Option 1" },
  { value: "Option2", label: "Option 2" },
  { value: "Option3", label: "Option 3" },
  // Add more options as needed
];

 const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#007bff" : "white",
      color: state.isFocused ? "white" : "black",
      cursor: "pointer",
    }),
    control: (provided) => ({
      ...provided,
      width: 200,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "white" : "black",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "white" : "black",
    }),
  };
  
  

function CustomSelect() {
  return (
    <div>
      <Select
        options={options}
        styles={customStyles} // Apply custom styles
        defaultValue={options[0]} // Set a default value
      />
    </div>
  );
}

export default CustomSelect;
