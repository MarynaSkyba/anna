import React, { useState } from "react";
import { FormContainer, FormTitle, FormGroup, Label, Input, Select, TextArea } from "./ContatcFormElements";
// import CustomSelect from "../../utils/Select";
// import OptionSelect from "../../utils/OptionSelect";
import { useLocation } from 'react-router-dom'
import { Button } from "../../utils/Button";


export default function ContactForm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedPrice = queryParams.get('price') || 'Option 1';

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    telephone: "",
    description: "",
    selectedOption: selectedPrice,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormContainer>
      <FormTitle>Let Me Know What You Want To Book</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="name">Telephone:</Label>
          <Input
            type="text"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
          <FormGroup>
          <Label htmlFor="selectedOption">Select an product:</Label>
          <Select
            id="selectedOption"
            name="selectedOption"
            value={formData.selectedOption}
            onChange={handleInputChange}
            required
          >
          <optgroup label="Webinars">
            <option value="Option 1">Create the desired reality - 99$ </option>
            <option value="Option 2">Relationships with the opposite sex - 99$</option>

          </optgroup>
                    <optgroup label="Book"> 
                    <option value="Option 3">Book - 18$ (without shipment)</option>
            <option value="Option 4">Book - 13$(online)</option>
                    </optgroup>
<optgroup label="Other">

            <option value="Option 5">Coaching - 350$</option>
            <option value="Option 6">Mentoring - 1999$</option>
            <option value="Option 7">Course "Own borders" - 59$</option>
            <option value="Option 8">Course “Metaphysics of Money” - 113$</option>

</optgroup>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">What do you want to change in life?</Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            required
          />
        </FormGroup>
      
        <Button $uppercase $primary $dark type="submit">Send</Button>
      </form>
    </FormContainer>
  );
}

