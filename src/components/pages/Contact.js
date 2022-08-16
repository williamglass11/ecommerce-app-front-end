import React from "react";

import "../../styles/Contact.css";

const textBlah =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
const contactMessage = "Leave a message";
const Contact = () => {
  return (
    <div className="contactPage">
      <div id="contactLeftHalf">
        <div id="contactLeftHeadText">Contact Us</div>
        <div id="contactLeftBodyText">{textBlah}</div>
      </div>

      <div className="contactRightHalf">
        <form className="contactForm">
          <div className="namesContainer">
            <div id="fNameContainer">
              <label htmlFor="fName" style={{fontWeight: 'bold'}}>First Name</label>
              <input type="text" id="fName" />
            </div>
            <div id="lNameContainer">
              <label htmlFor="lName" style={{fontWeight: 'bold'}}>Last Name</label>
              <input type="text" id="lName" />
            </div>
          </div>
          <label htmlFor="email" style={{fontWeight: 'bold'}}>Email</label>
          <input type="text" id="email" />
          <label htmlFor="contactMessage" style={{fontWeight: 'bold'}}>{contactMessage}</label>
          <textarea id="contactMessage" rows="4" cols="50"></textarea>
          <input type="button" value="Submit" id="contactSubmit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
