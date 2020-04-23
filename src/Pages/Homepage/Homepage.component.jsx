import React from "react";

import SignIn from '../../components/Sign-In/Sign-In.component';
import CustomButton from "../../components/Custom-Button/Custom-Button.component";
import {
  HomepageContainer,
  MainSection,
  StartedButton,
} from "./Homepage.styles";

const Homepage = () => {
  return (
    <HomepageContainer>
      <MainSection>
        <h1>Get your Education today</h1>
        <StartedButton>
          <CustomButton>Get Started</CustomButton>
        </StartedButton>
      </MainSection>
      <SignIn/>
    </HomepageContainer>
  );
};

export default Homepage;
