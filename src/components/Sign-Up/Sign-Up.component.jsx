import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form} from "react-bootstrap";

import FormInput from "../Form-Input/Form-Input.component";
import CustomButton from "../Custom-Button/Custom-Button.component";
import AuthButtons from "../Auth-Buttons/Auth-Buttons.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { SignUpContainer, SignUpCard, SignUpCardBody } from "./Sign-Up.styles";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user);

      this.setState({
        email,
        password,
        confirmPassword,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <SignUpCard>
          <SignUpCardBody>
            <h3>Welcome to E Learner</h3>
            <p>Sign up instantly</p>
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
              <FormInput>
                <i className="fa fa-lock"></i>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={this.handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </FormInput>
              <CustomButton type="submit" isCardButton>
                Sign Up
              </CustomButton>
            </Form>
            <p>
              Already have an account?{" "}
              <span>
                <Link to="/sign_in" style={{ textDecoration: "none" }}>
                  Sign in
                </Link>
              </span>
            </p>
          </SignUpCardBody>
        </SignUpCard>
      </SignUpContainer>
    );
  }
}

export default SignUp;
