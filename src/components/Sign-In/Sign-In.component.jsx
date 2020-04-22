import React from "react";
import {Button, Card, Form } from "react-bootstrap";

import CustomButton from "../Custom-Button/Custom-Button.component";

import {
  AuthButtonsContainer,
  SignInContainer,
  SignInCard,
  FormInput,
} from "./Sign-In.styles";

const SignIn = () => {
  return (
    <SignInContainer>
      <SignInCard>
        <Card.Body>
          <h3>Welcome back!</h3>
          <p>Login to your account</p>
          <AuthButtonsContainer>
          <Button type="submit"><i class="fab fa-google"></i></Button>
            <CustomButton>
              <i class="fab fa-github"></i>
            </CustomButton>
            <CustomButton>
              <i class="fab fa-linkedin"></i>
            </CustomButton>
          </AuthButtonsContainer>
          <p>Or</p>
          <Form>
            <FormInput>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <input type="email" placeholder="Enter email" />
            </FormInput>

            <FormInput>
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Password" />
            </FormInput>
          </Form>
          <CustomButton>Sign in</CustomButton>
        </Card.Body>
      </SignInCard>
    </SignInContainer>
  );
};

export default SignIn;
