import React from "react";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import AirIcon from "@mui/icons-material/Air";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import LanguageIcon from "@mui/icons-material/Language";

import "../../styles/About.css";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="about">
        <div id="icon">
          <ConnectWithoutContactIcon fontSize="inherit" />
        </div>
        <h1 id="topText">We Are eCommerce</h1>
      </div>
      <div className="divider">
        <span></span>
        <span>How We Started</span>
        <span></span>
      </div>
      <div className="firstContentSection">
        <div id="firstContentText">{text}</div>
        <div id="iconTwo">
          <AirIcon fontSize="inherit" />
          <AirportShuttleIcon fontSize="inherit" />
          <DirectionsBikeIcon fontSize="inherit" />
        </div>
      </div>
      <div className="divider">
        <span></span>
        <span>Our Mission</span>
        <span></span>
      </div>
      <div className="secondContentSection">
        <div id="iconThree">
          <FingerprintIcon fontSize="inherit" />
          <EnergySavingsLeafIcon fontSize="inherit" />
          <LanguageIcon fontSize="inherit" />
        </div>
        <div id="secondContentText">{text}</div>
      </div>
    </div>
  );
};

export default About;
