import React from "react";
import { FormControlLabel, Switch } from "@mui/material";

import "../../styles/Switch.css";

const AppleStyleSwitch = () => {
  return (
    <div id="switch">
      <FormControlLabel control={<Switch />} />
    </div>
  );
};

export default AppleStyleSwitch;
