import React, { useState } from "react";

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
];

const uniqueLocations = [...new Set(careers.map((item) => item.Location))];
const uniquePositions = [...new Set(careers.map((item) => item.Position))];

const Careers = () => {
  const [location, setLocation] = useState("all locations");

  const setLocationButton = (location) => {
    setLocation(location);
  };

  return (
    <div className="careers">
      <div className="topTitle">
        Search for open positions in
        <div className="dropdownLocations">
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
      </div>
      <span className="jobFilter">
        {uniquePositions.map((item, key) => (
          <div key={key}>{item}</div>
        ))}
      </span>
      <div className="bottomHalf">
        <div className="jobCardContainer">
          {careers.map((item, key) => (
            <div className="jobCard" key={key}>
              <div id="cardTitle">{item.Title}</div>
              <div id="cardLocation">{item.Location}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
