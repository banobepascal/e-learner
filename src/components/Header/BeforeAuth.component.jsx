import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../Custom-Button/Custom-Button.component";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinks,
} from "./Header.styles";

const BeforeAuthHeader = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        E Learner
      </LogoContainer>
      <OptionsContainer>
        <OptionLinks to="/about">About</OptionLinks>
        <OptionLinks to="/courses">Courses</OptionLinks>
        <OptionLinks to="/sign_in">Log In</OptionLinks>
        <Link to="/sign_up" style={{ textDecoration: "none" }}>
          <CustomButton>Sign Up</CustomButton>
        </Link>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default BeforeAuthHeader;
