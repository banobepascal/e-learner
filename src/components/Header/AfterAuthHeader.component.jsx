import React from "react";
import { Navbar } from "react-bootstrap";

import CustomButton from "../Custom-Button/Custom-Button.component";

import { auth } from "../../firebase/firebase.utils";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinks,
  MobileHeader,
  MobileNav,
} from "./Header.styles";

const AfterAuthHeader = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/courses">
        <p>E Learner</p>
      </LogoContainer>
      <OptionsContainer>
        <OptionLinks to="/about">About</OptionLinks>
        <OptionLinks to="/courses">Courses</OptionLinks>
        <OptionLinks to="/my_courses">My courses</OptionLinks>
        <CustomButton onClick={() => auth.signOut()}>Log out</CustomButton>
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
            <OptionLinks to="/my_courses">My courses</OptionLinks>
            <CustomButton onClick={() => auth.signOut()}>Log out</CustomButton>
          </MobileNav>
        </Navbar.Collapse>
      </MobileHeader>
    </HeaderContainer>
  );
};

export default AfterAuthHeader;
