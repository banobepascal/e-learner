import styled, { css } from "styled-components";

const loginStyles = css`
  background: transparent;
  border: 1px solid #686f7a;
  color: rgb(95, 93, 93);

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    background: none;
    border: 1px solid #000;
    color: #000;
    outline: none;
  }
`;

const signUpStyles = css`
  background: #fc3c64;
  border: 1px solid #fc3c64;
  color: #fff;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    outline: none;
    background: #e44f6e;
  }
`;

const cardButtonStyles = css`
  border-radius: 4px;
  background: #fc3c64;
  border: 1px solid #fc3c64;
  width: 100%;

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

const getButtonStyles = (props) => {
  if (props.isLogin) {
    return loginStyles;
  }

  if (props.isCardButton) {
    return cardButtonStyles;
  }

  return signUpStyles;
};

export const CustomButtonContainer = styled.button`
  font-size: 1em;
  padding: 11px 25px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-out, color 0.2s ease-out;
  text-align: center;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  border-radius: 2px;

  ${getButtonStyles}
`;
