import styled from "styled-components";
import { Link } from "react-router-dom";
import CustomButton from "../Custom-Button/Custom-Button.component";

export const HeaderContainer = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  color: #000;
  overflow: hidden;
`;

export const LogoContainer = styled(Link)`
  margin: 1em 0;

  p {
    font-family: "Fredoka One", cursive;
    text-transform: uppercase;
    color: #fc3c64;
    font-size: 1.5em;
  }

  &:hover {
    text-decoration: none;
  }
`;

export const OptionsContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OptionLinks = styled(Link)`
  margin: 0 2px;
  padding: 12px 15px;
  color: rgb(95, 93, 93);

  &:hover {
    text-decoration: none;
    color: rgb(95, 93, 93);
    background-color: #f2f2f2;
    padding: 12px 15px;
  }
`;

export const BeforeAfter = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    margin-left: 2.5em;
  }
`;

export const AuthButton = styled(CustomButton)`
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-out, color 0.2s ease-out;
`;

export const FormContainer = styled.form`
  width: 60%;
  margin-bottom: 0;
`;

export const InnerForm = styled.div`
  background: #fff;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 3px;
`;

export const InputField = styled.div`
  height: 2.9rem;
  width: 100%;

  input {
    height: 100%;
    background: #f2f2f2;
    border: 0;
    display: block;
    width: 100%;
    font-size: 16px;
    outline: none;
    padding-left: 1em;

    &:placeholder {
      color: #888;
      font-size: 16px;
    }
  }

  button {
    height: 100%;
    width: 100%;
    white-space: nowrap;
    color: #fff;
    border: 0;
    cursor: pointer;
    background: #fc3c64;
    transition: all 0.2s ease-out, color 0.2s ease-out;
    outline: none;

    &:hover {
      background: #e44f6e;
    }
  }
`;
