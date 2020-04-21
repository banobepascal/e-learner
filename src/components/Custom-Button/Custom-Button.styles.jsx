import styled, { css } from "styled-components";

const loginStyles = css`
  background: transparent;
  border: 1px solid rgb(95, 93, 93);
  color: rgb(95, 93, 93);

  &:hover {
    background: none;
    border: 1px solid #000;
    color: #000;
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
    text-decoration: none;
    outline: none;
    background: #e44f6e;
  }
`;

const getButtonStyles = (props) => {
  if (props.isLogin) {
    return loginStyles;
  }

  return signUpStyles;
};

export const CustomButtonContainer = styled.div`
  font-size: 1em;
  padding: 11px 25px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-out, color 0.2s ease-out;
  text-align: center;
  font-family: "Poppins", sans-serif;

  ${getButtonStyles}
`;
