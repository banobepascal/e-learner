import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "../Custom-Button/Custom-Button.component";
import Search from '../Search/Search.component';

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
          <OptionLinks to="/courses">Courses</OptionLinks>
          <Search/>
          {currentUser ? (
            <OptionLinks to="/my_courses">My courses</OptionLinks>
          ) : (
            <OptionLinks to="/">About</OptionLinks>
          )}
          {currentUser ? (
            <BeforeAfter>
              <CustomButton onClick={() => auth.signOut()}>
                Sign Out
              </CustomButton>
            </BeforeAfter>
          ) : (
            <BeforeAfter>
              <Link to="/sign_in" style={{ textDecoration: "none" }}>
                <CustomButton isLogin>Log In</CustomButton>
              </Link>
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
