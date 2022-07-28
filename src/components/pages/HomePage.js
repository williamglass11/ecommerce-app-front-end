import React from "react";

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

const HomePage = () => {
  return (
    <div id="home">
      <div className="topSpaceWithLogo">
        <div className="largeMessage">Simple, Fast, Ecommerce Solutions</div>
        <img
          className="reactLogo"
          alt="React Logo"
          src={require("../../styles/react-icon-dark.jpg")}
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
            Fast Shipping
            <p>{equalOp}</p>
            <AccessibilityIcon fontSize="large" />
          </h1>
          <h1 className="info">
            Fast Shipping
            <p>{payment}</p>
            <CurrencyBitcoinIcon fontSize="large" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
