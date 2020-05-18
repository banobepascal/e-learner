import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "../Custom-Button/Custom-Button.component";

import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinks,
  BeforeAfter,
} from "./Header.styles";

class Header extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <HeaderContainer>
        <LogoContainer to="/">
          <p>E Learner</p>
        </LogoContainer>
        <OptionsContainer>
          <OptionLinks to="/">About</OptionLinks>
          <OptionLinks to="/courses">Courses</OptionLinks>
          {currentUser ? (
            <OptionLinks to="/my_courses">My courses</OptionLinks>
          ) : null}
          {currentUser ? (
            <BeforeAfter>
              <CustomButton onClick={() => auth.signOut()}>
                Log out
              </CustomButton>
            </BeforeAfter>
          ) : (
            <BeforeAfter>
              <OptionLinks to="/sign_in">
                Log In
              </OptionLinks>
              <Link to="/sign_up" style={{ textDecoration: "none" }}>
                <CustomButton>Sign Up</CustomButton>
              </Link>
            </BeforeAfter>
          )}
        </OptionsContainer>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
