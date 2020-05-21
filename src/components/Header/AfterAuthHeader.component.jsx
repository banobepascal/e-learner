import React from "react";

import CustomButton from "../Custom-Button/Custom-Button.component";

import { auth } from "../../firebase/firebase.utils";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinks,
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
    </HeaderContainer>
  );
};

export default AfterAuthHeader;
