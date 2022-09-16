import React from "react";
import AppleStyleSwitch from "../toggleSwitch/AppleStyleSwitch";
import { Link } from "react-router-dom";

import logo from "../../styles/Images/react-icon-dark.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

import "../../styles/SignIn.css";

const SignIn = () => {
  return (
    <div className="signInPage">
      <section className="logInContainer">
        <img src={logo} alt="logo atop sign in form" id="topLogInLogo" />
        <form className="formContainer">
          <div className="userNameField">
            <span id="userNameIcon">
              <AccountCircleIcon fontSize="inherit" />
            </span>
            <input type="text" className="userNameLog" placeholder="Username" />
          </div>
          <div className="passwordField">
            <span id="passwordIcon">
              <LockIcon fontSize="inherit" />
            </span>
            <input type="text" className="passwordLog" placeholder="Password" />
          </div>
          <input type="button" id="submit" value="Submit" />
        </form>
        <div id="switchHolder">
          <AppleStyleSwitch />
          <div id="switchText">Remember Me</div>
        </div>
        <Link id="createAccountBtn" to="/signUp">
          Create Account
        </Link>
      </section>
    </div>
  );
};

export default SignIn;
