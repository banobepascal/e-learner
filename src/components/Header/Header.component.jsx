import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../Custom-Button/Custom-Button.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import { auth } from "../../firebase/firebase.utils";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinks,
  FormContainer,
  InnerForm,
  InputField,
  AuthLinks,
} from "./Header.styles";

const Header = ({ currentUser }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" style={{ width: "70px", height: "50px" }} />
        <p>E Learner</p>
      </LogoContainer>
      <OptionsContainer>
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
        <OptionLinks to="/courses">Courses</OptionLinks>
        <OptionLinks to="/">About</OptionLinks>
        {currentUser ? (
          <CustomButton onClick={() => auth.signOut()}>Sign Out</CustomButton>
        ) : (
            <Link to="/sign_in" style={{ textDecoration: "none" }}>
              <CustomButton>Log In</CustomButton>
            </Link>
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
