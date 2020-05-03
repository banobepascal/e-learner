import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import CustomButton from "../Custom-Button/Custom-Button.component";
import FormInput from "../Form-Input/Form-Input.component";
import AuthButtons from "../Auth-Buttons/Auth-Buttons.component";

import { auth } from "../../firebase/firebase.utils";

import { SignInContainer, SignInCard, SignInCardBody } from "./Sign-In.styles";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <SignInContainer>
        <SignInCard>
          <SignInCardBody>
            <h3>Welcome back!</h3>
            <p>Login to your account</p>
            <AuthButtons />
            <h6>
              <span>Or</span>
            </h6>
            <Form onSubmit={this.handleSubmit}>
              <FormInput>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Enter your email"
                  required
                />
              </FormInput>
              <FormInput>
                <i className="fa fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  placeholder="Enter your password"
                  required
                />
              </FormInput>
              <CustomButton type="submit" isCardButton>
                Sign in
              </CustomButton>
            </Form>
            <p>
              Dont have an acount?{" "}
              <span>
                <Link to="/sign_up" style={{ textDecoration: "none" }}>
                  Sign Up
                </Link>
              </span>
            </p>
          </SignInCardBody>
        </SignInCard>
      </SignInContainer>
    );
  }
}

export default SignIn;
