import React from "react";
import NewCarousel from "../ProductCarousel/NewCarousel";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

import "../../styles/HomePage.css";

const fastShip =
  "Warehouses in every major city facilitate next day shipping to most states within the US. We are dedicated to ensuring that there will be a timely shipment of all goods with a 100% refund guarantee.";
const equalOp =
  "As an equal opportunity employer, even a criminal background or disability wont prevent employment. We attribute most of our success to our diverse working team.";
const payment =
  "We accept all major payment apps like Venmo, Paypal, Zelle, and cashapp. In addition we also accept wallet to wallet crypto transfers.";
const mediaText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The rest of this is just filler text for the pure reason of filling space to help with layout and design, I hope you like this website I am currently working on, feel free to contact me with any recommendations or advice";

const HomePage = () => {
  return (
    <div id="home">
      <div className="topSpaceWithLogo">
        <div className="largeMessage">Simple, Fast, eCommerce Solutions</div>
        <img
          className="reactLogo"
          alt="React Logo"
          src={require("../../styles/Images/react-icon-dark.jpg")}
        />
      </div>
      <div className="bottomHalfHome">
        <div className="titleText">Amazon? Jeff who?</div>
        <div className="infoContainer">
          <h1 className="info">
            Fast Shipping
            <p>{fastShip}</p>
            <AccessTimeIcon fontSize="large" />
          </h1>
          <h1 className="info">
            Equal Opportunity
            <p>{equalOp}</p>
            <AccessibilityIcon fontSize="large" />
          </h1>
          <h1 className="info">
            All Payment Types
            <p>{payment}</p>
            <CurrencyBitcoinIcon fontSize="large" />
          </h1>
        </div>
        <hr className="roundedDivider"></hr>
        <NewCarousel />
        <div className="bottomHalfMedia">
          <img
            className="waterImage"
            alt="stones in shallow water"
            src={require("../../styles/Images/oceanwater-min.jpg")}
          />
          <h1 className="mediaText">{mediaText}</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
