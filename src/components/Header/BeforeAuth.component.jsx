import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

import CustomButton from "../Custom-Button/Custom-Button.component";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinks,
  MobileHeader,
  MobileNav,
} from "./Header.styles";

const BeforeAuthHeader = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <p>E Learner</p>
      </LogoContainer>
      <OptionsContainer>
        <OptionLinks to="/about">About</OptionLinks>
        <OptionLinks to="/courses">Courses</OptionLinks>
        <OptionLinks to="/sign_in">Log In</OptionLinks>
        <Link to="/sign_up" style={{ textDecoration: "none" }}>
          <CustomButton>Sign Up</CustomButton>
        </Link>
      </OptionsContainer>

      <MobileHeader expand="lg" fixed="top">
        <LogoContainer to="/">
          <p>E Learner</p>
        </LogoContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <MobileNav>
            <OptionLinks to="/about">About</OptionLinks>
            <OptionLinks to="/courses">Courses</OptionLinks>
            <OptionLinks to="/sign_in">Log In</OptionLinks>
            <Link to="/sign_up" style={{ textDecoration: "none" }}>
              <CustomButton>Sign Up</CustomButton>
            </Link>
          </MobileNav>
        </Navbar.Collapse>
      </MobileHeader>
    </HeaderContainer>
  );
};

export default BeforeAuthHeader;
