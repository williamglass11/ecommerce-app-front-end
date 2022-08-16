import React from "react";
import Carousel from "../ProductCarousel/Carousel";

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
  "Tired of big Jeff harvesting your data?? Here we are just concerned with delivering customers high quality products on time. We are dedicated to meeting this mission because this company was founded on the idea that Jeff is way too rich and Amazon needs a serious competitor in this market Tired of big Jeff harvesting your data?? Here we are just concerned with delivering customers high quality products on time. We are dedicated to meeting this mission because this company was founded on the idea that Jeff is way too rich and Amazon needs a serious competitor in this market";

const HomePage = () => {
  return (
    <div id="home">
      <div className="topSpaceWithLogo">
        <div className="largeMessage">Simple, Fast, Ecommerce Solutions</div>
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
        <Carousel />
        <div className="bottomHalfMedia">
          <img
            className="waterImage"
            alt="stones in shallow water"
            src={require("../../styles/Images/oceanwater.jpg")}
          />
          <h1 className="mediaText">{mediaText}</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
