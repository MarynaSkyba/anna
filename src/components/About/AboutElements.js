import styled from "styled-components";

export const AboutContainer = styled.footer`
  background-color: #f0f0f0;
  padding: 20px;
  /* height: 80px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.img`
  max-height: 50px;
  width: auto;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const SocialIcon = styled.a`
  font-size: 34px;
  color: #333;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #cce0a9;
  }
`;
