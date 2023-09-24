import styled from "styled-components";
import { colors } from "../../styles";

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  background-color: ${colors.ivory};
`;

export const FormTitle = styled.h2`
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
  border: 1px solid ${colors.main};
  border-radius: 5px;
  
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid ${colors.main};
  border-radius: 5px;
  resize: none;
  font-size: 16px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid ${colors.main};
  border-radius: 5px;
`;

export const Button = styled.button`
width: 100%;
  background-color: ${colors.mainGrey};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;