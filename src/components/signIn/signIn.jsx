import React from "react";

import FormInput from "../fomr-input/form-input";
import CustmoButton from "../custom-button/custom-button";

import { signInWithGoogle } from "../../firebase/firebase";

import "./signIn.scss";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I have an already accout</h2>
        <span>SIgn in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustmoButton type="submit">Sign In</CustmoButton>
            <CustmoButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustmoButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
