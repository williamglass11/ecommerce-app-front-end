import React, { useState } from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import "../../styles/Careers.css";

const careers = [
  {
    Position: "Digital Marketing",
    Location: "remote",
    Title: "Facebook marketing manager",
  },
  {
    Position: "Software Developer",
    Location: "Los Angeles",
    Title: "Software Engineer II",
  },
  {
    Position: "Digital Marketing",
    Location: "Austin",
    Title: "Senior Marketer",
  },
  {
    Position: "Data Science",
    Location: "Los Angeles",
    Title: "Data Science Team lead",
  },
  {
    Position: "Software Developer",
    Location: "Austin",
    Title: "Senior Software Engineer",
  },
  {
    Position: "Software Developer",
    Location: "Bangkok",
    Title: "Senior Software Architect",
  },
  {
    Position: "Intern",
    Location: "Wyoming",
    Title: "Rodeo Burger Specialist",
  },
  {
    Position: "Software Developer",
    Location: "FlavorTown",
    Title: "Junior Software Developer",
  },
  {
    Position: "Intern",
    Location: "New York",
    Title: "Project Management Intern",
  },
];

const uniqueLocations = [...new Set(careers.map((item) => item.Location))];
const uniquePositions = [...new Set(careers.map((item) => item.Position))];

const Careers = () => {
  const [location, setLocation] = useState("all locations");
  const [position, setPosition] = useState("all positions");

  const setLocationButton = (location) => {
    setLocation(location);
  };
  const setPositionButton = (position) => {
    setPosition(position);
  };

  return (
    <div className="careers">
      <div className="topTitle">
        Search for open positions in
        <div className="dropdownCareers">
          <button>
            {location}
            <i className="fas fa-caret-down" />
          </button>
          <ul>
            <li
              onClick={() => {
                setLocationButton("all locations");
              }}
            >
              All locations
            </li>
            {uniqueLocations.map((item, key) => (
              <li
                key={key}
                onClick={() => {
                  setLocationButton(item);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="dropdownCareers">
          as
          <button>
            {position}
            <i className="fas fa-caret-down" />
          </button>
          <ul>
            <li
              onClick={() => {
                setPositionButton("all positions");
              }}
            >
              All positions
            </li>
            {uniquePositions.map((item, key) => (
              <li
                key={key}
                onClick={() => {
                  setPositionButton(item);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottomHalf">
        <div className="jobCardContainer">
          {careers.map((item, key) => (
            <div className="jobCard" key={key}>
              <div id="cardTitle">{item.Title}</div>
              <div id="cardLocation">
                {item.Location}
                <LocationOnIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
