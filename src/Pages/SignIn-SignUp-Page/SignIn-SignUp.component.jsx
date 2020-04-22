import React from "react";

import SignIn from '../../components/Sign-In/Sign-In.component';
import {SigninSignupContainer} from "./SignIn-SignUp.styles";

const SignInSignUp = () => {
  return <SigninSignupContainer>
    <SignIn/>
  </SigninSignupContainer>;
};

export default SignInSignUp;
