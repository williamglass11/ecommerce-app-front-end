import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

import "../styles/Footer.css";

const textBlah =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const Footer = () => {
  return (
    <footer>
      <div className="footerContent">
        <div className="footerContainer">
          <div className="headerFoot">About Us</div>
          <div className="aboutUsText">{textBlah}</div>
          <div className="aboutUsIconContainer">
            <FacebookIcon className="icon" />
            <InstagramIcon className="icon" />
            <TwitterIcon className="icon" />
            <YouTubeIcon className="icon" />
            <LinkedInIcon className="icon" />
          </div>
        </div>
        <div className="footerContainer">
          <div className="headerFoot">Contact</div>
          <div className="contactContainer">
            <div className="locationLine">
              <LocationOnIcon />
              <span>12345 St, Los Angeles, CA</span>
            </div>
            <div className="locationLine">
              <LocalPhoneIcon />
              <span>+1 (555)-233-4565</span>
            </div>
            <div className="locationLine">
              <MailIcon />
              <span>eCommerceExample@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="footerContainer">
          <div className="headerFoot">Useful Links</div>
          <div className="links">
            <div className="link">Home</div>
            <div className="link">About</div>
            <div className="link">Consulting</div>
            <div className="link">Design</div>
            <div className="link">Development</div>
            <div className="link">Products</div>
            <div className="link">Contact Form</div>
          </div>
        </div>
        <div className="newsLetterContainer">
          <div className="headerFoot">Newsletter</div>
          <div id="newsLetter">
            <input id="emailField" placeholder="Email"></input>
            <button id="subscribe">Subscribe</button>
          </div>
        </div>
      </div>
      <div id="footerNote">
        Copyright © 2022 eCommerce Will Glass Development
      </div>
    </footer>
  );
};

export default Footer;
