import React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinks,
  AuthButton,
  FormContainer,
  InnerForm,
  InputField
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" style={{ width: "70px", height: "50px" }} />
        <p>E Learner</p>
      </LogoContainer>
      <OptionsContainer>
        <OptionLinks to="/">Categories</OptionLinks>
        <FormContainer>
          <InnerForm>
            <InputField>
              <input
                id="search"
                type="text"
                placeholder="Search for category or course"
              />
            </InputField>
            <InputField style={{ width: "30%" }}>
              <button className="btn-search" type="button">
                Search
              </button>
            </InputField>
          </InnerForm>
        </FormContainer>
        <OptionLinks to="/">Courses</OptionLinks>
        <OptionLinks to="/">About</OptionLinks>
        <AuthButton style={{background: "transparent", color: "#000", border: "1px solid #000"}}>Log In</AuthButton>
        <AuthButton>Sign Up</AuthButton>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
