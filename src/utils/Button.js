import styled from "styled-components";
import { Link } from "react-scroll";
import { colors } from "../styles";

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  white-space: nowrap;


  /* background: ${props => props.$primary ? "#BF4F74" : "white"}; */

  background: ${({ $primary }) => ($primary ? colors.accent : colors.white)};
  padding: ${({ $big }) => ($big ? "14px 48px" : "12px 30px")};
  color: ${({ $dark }) => ($dark ? colors.white : colors.main)};
  font-size: ${({ $fontBig }) => ($fontBig ? "20px" : "16px")};
  text-transform: ${({ $uppercase }) => ($uppercase ? "uppercase" : "")};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: grey;
    background: ${colors.white};
    /* color: ${({ primary }) => (primary ? "#EC9162" : "#EC9162")}; */
  }
`;
