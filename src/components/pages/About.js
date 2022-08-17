import React from "react";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

import "../../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div id="icon">
        <ConnectWithoutContactIcon fontSize="inherit" />
      </div>
      <div>We Are eCommerce</div>
    </div>
  );
};

export default About;
