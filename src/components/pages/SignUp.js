import React from "react";

import "../../styles/SignUp.css";

const SignUp = () => {
  return (
    <div className="signUp">
      <section className="signUpFormContainer">
        <h1>Create an eCommerce Account</h1>
        <form className="signUpForm">
          <label htmlFor="signUpEmail">Email</label>
          <input type="text" id="signUpEmail" />
          <label htmlFor="signUpFName">First Name</label>
          <input type="text" id="signUpFName" />
          <label htmlFor="signUpLName">Last Name</label>
          <input type="text" id="signUpLName" />
          <label htmlFor="signUpPassword">Password</label>
          <input type="text" id="signUpPassword" />
          <label htmlFor="signUpReenterPassword">Re-Enter Password</label>
          <input type="text" id="signUpReenterPassword" />
          <input type="button" value="Submit" id="signUpSubmit" />
        </form>
        <div id="bottomSignUp">
          By clicking submit you agree to our
          <div id="bottomSignUpLink">Terms and Conditions</div>as well as
          agreeing to eCommerce being able to sell your information to China.
        </div>
      </section>
    </div>
  );
};

export default SignUp;
