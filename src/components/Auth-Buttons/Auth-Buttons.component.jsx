import React from "react";
import { Button } from "react-bootstrap";

import {
  signInWithGoogle,
  signInWithGithub,
} from "../../firebase/firebase.utils";

import { AuthButtonsContainer } from "./Auth-Buttons.styles";
const AuthButtons = () => {
  return (
    <AuthButtonsContainer>
      <Button onClick={signInWithGoogle}>
        <i className="fab fa-google"></i>
      </Button>
      <Button variant="dark" onClick={signInWithGithub}>
        <i className="fab fa-github"></i>
      </Button>
    </AuthButtonsContainer>
  );
};

export default AuthButtons;
