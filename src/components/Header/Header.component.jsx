import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CustomButton from "../Custom-Button/Custom-Button.component";

import { auth } from "../../firebase/firebase.utils";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinks,
  FormContainer,
  InnerForm,
  InputField,
  BeforeAfter
} from "./Header.styles";

const Header = ({ currentUser }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <p>E Learner</p>
      </LogoContainer>
      <OptionsContainer>
        <OptionLinks to="/courses">Courses</OptionLinks>
        <FormContainer>
          <InnerForm>
            <InputField>
              <input
                id="search"
                type="text"
                placeholder="Search for category or course"
              />
            </InputField>
            <InputField style={{ width: "20%" }}>
              <button className="btn-search" type="button">
                Search
              </button>
            </InputField>
          </InnerForm>
        </FormContainer>
        {currentUser ? (
          <BeforeAfter>
            <OptionLinks to="/my_courses">My courses</OptionLinks>
            <CustomButton onClick={() => auth.signOut()}>Sign Out</CustomButton>
          </BeforeAfter>
        ) : (
          <BeforeAfter>
          <OptionLinks to="/">About</OptionLinks>
          <Link to="/sign_in" style={{ textDecoration: "none" }}>
            <CustomButton>Log In</CustomButton>
          </Link>
          </BeforeAfter>
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
