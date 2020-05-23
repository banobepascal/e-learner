import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import SignIn from "../../components/Sign-In/Sign-In.component";
import CustomButton from "../../components/Custom-Button/Custom-Button.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  HomepageContainer,
  Condiv,
  MainSection,
  StartedButton,
} from "./Homepage.styles";

const Homepage = ({ currentUser }) => {
  return (
    <HomepageContainer>
        <MainSection>
          <h1>Get your Education today</h1>
          <p>
            Bring the world home and choose from over 20+ online video courses
            with new additions published every month.{" "}
          </p>
          <p>Here at E Learner you get global knowledge at your fingertips.</p>
          <StartedButton>
            <Link to="/sign_up">
              <CustomButton>Get Started</CustomButton>
            </Link>
          </StartedButton>
        </MainSection>
      <Condiv>
        {currentUser ? <Redirect to="/courses" /> : <SignIn />}
      </Condiv>
    </HomepageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Homepage);
