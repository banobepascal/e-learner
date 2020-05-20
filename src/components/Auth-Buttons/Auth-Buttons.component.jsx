import React from "react";
import { Button } from "react-bootstrap";

import { ReactComponent as Logo } from "../../assets/google.svg"
import {
  signInWithGoogle,
  signInWithGithub,
} from "../../firebase/firebase.utils";

import { AuthButtonsContainer } from "./Auth-Buttons.styles";
const AuthButtons = () => {
  return (
    <AuthButtonsContainer>
      <Button variant="dark" onClick={signInWithGoogle}>
        <Logo/>
      </Button>
      <Button variant="dark" onClick={signInWithGithub}>
        <i className="fab fa-github"></i>
      </Button>
    </AuthButtonsContainer>
  );
};

export default AuthButtons;
