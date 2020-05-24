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
      <LogoContainer to="/">E Learner</LogoContainer>
      <OptionsContainer>
        <OptionLinks to="/about">About</OptionLinks>
        <OptionLinks to="/courses">Courses</OptionLinks>
        <OptionLinks to="/sign_in">Log In</OptionLinks>
        <Link to="/sign_up" style={{ textDecoration: "none" }}>
          <CustomButton>Sign Up</CustomButton>
        </Link>
      </OptionsContainer>
      <div class="menu-bg"></div>
      <div class="menu-burger">☰</div>
      <div class="menu-items">
        <div>CALL</div>
        <div>DRIVE</div>
        <div>MAIL</div>
      </div>
    </HeaderContainer>
  );
};

export default BeforeAuthHeader;
