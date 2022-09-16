import React from "react";
import DataObjectIcon from "@mui/icons-material/DataObject";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import BrushIcon from "@mui/icons-material/Brush";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

import logo from "../../styles/Images/react-icon-dark.jpg";

import "../../styles/Consulting.css";

const topMsgHeader =
  "OUR CONSULTING DELIVERS RESULTS LIKE WE DELIVER OUR PRODUCTS";
const topMsg =
  "Being a competitor in the tech industry, we cannot afford to only dominate in the logistics sector, we take seriously our capabilities for business, design, security, and development consulting.";
const middleTopMsg =
  "Click on any card below or on icons above to learn more about a specific service";

const Consulting = () => {
  return (
    <div className="consulting">
      <span className="topSpan">
        <section className="topSection">
          <h1 id="topTextHeader">{topMsgHeader}</h1>
          <div id="topTextBody">{topMsg}</div>
          <span className="buttonSpanTop">
            <input id="topLearnMore" type="button" value="Learn More" />
            <input id="signUpConsulting" type="button" value="Sign Up" />
          </span>
        </section>
        <img src={logo} alt="logo next to text" id="topConsultingLogo" />
      </span>
      <section className="middleDividerConsulting">
        <div id="consultingIcon">
          {<DataObjectIcon fontSize="inherit" />}
          <h3>Development</h3>
        </div>
        <div id="consultingIcon">
          {<PhonelinkLockIcon fontSize="inherit" />}
          <h3>Cyber Security</h3>
        </div>
        <div id="consultingIcon">
          {<BrushIcon fontSize="inherit" />}
          <h3>Design</h3>
        </div>
        <div id="consultingIcon">
          {<WorkOutlineIcon fontSize="inherit" />}
          <h3>Business</h3>
        </div>
      </section>
      <section className="middleSection">
        <h1 id="middleSectionHeader">What do we promise in consulting</h1>
        <h3 id="middleSectionTopText">{middleTopMsg}</h3>
      </section>
    </div>
  );
};

export default Consulting;
