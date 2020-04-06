import styled from "styled-components";

export const CustomButtonContainer = styled.div`
  font-size: 1em;
  padding: 12px 25px;
  color: #fff;
  border: 0;
  cursor: pointer;
  background: #fc3c64;
  transition: all 0.2s ease-out, color 0.2s ease-out;
  text-align: center;
  font-family: "Poppins", sans-serif;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    outline: none;
    background: #e44f6e;
  }
`;
