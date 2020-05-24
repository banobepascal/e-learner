import React from "react";
import { Link, NavLink } from "react-router-dom";

import CustomButton from "../Custom-Button/Custom-Button.component";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinks,
} from "./Header.styles";

import "./header.scss";
const BeforeAuthHeader = () => {
  return (
    <HeaderContainer>
      <header>
        <label class="hamburger" for="nav-toggle"></label>
        <input id="nav-toggle" type="checkbox" class="hidden" />
        <LogoContainer to="/">E Learner</LogoContainer>
        <nav>
        <OptionLinks to="/about">About</OptionLinks>
        <OptionLinks to="/courses">Courses</OptionLinks>
        <OptionLinks to="/sign_in">Log In</OptionLinks>
        <Link to="/sign_up" style={{ textDecoration: "none" }}>
          <CustomButton>Sign Up</CustomButton>
        </Link>
        </nav>
      </header>
    </HeaderContainer>
  );
};

export default BeforeAuthHeader;
