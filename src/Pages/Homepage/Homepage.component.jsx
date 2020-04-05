import React from "react";

import CustomButton from "../../components/Custom-Button/Custom-Button.component";
import {
  BackgroundContainer,
  BackgroundContent,
  StartedButton,
} from "./Homepage.styles";

const Homepage = () => {
  return (
    <div>
      <BackgroundContainer>
        <BackgroundContent>
          <h1>Get The Best Free Online Courses</h1>
          <StartedButton>
            <CustomButton>Get Started</CustomButton>
          </StartedButton>
        </BackgroundContent>
      </BackgroundContainer>
    </div>
  );
};

export default Homepage;
