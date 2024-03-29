import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

import "../../styles/Navbar.css";
import "../../styles/SignUpBtn.css";

const isSignUp = true;

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => {
    setClick(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 1000) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1000) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            closeMobileMenu("Home");
          }}
        >
          eCommerce
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={() => {
                closeMobileMenu("Home");
              }}
            >
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={() => {
                closeMobileMenu("Services");
              }}
            >
              Services <i className="fas fa-caret-down" />
              {dropdown && <Dropdown />}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-links"
              onClick={() => {
                closeMobileMenu("About");
              }}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-links"
              onClick={() => closeMobileMenu("Contact")}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/signIn"
              className="nav-links-mobile"
              onClick={() => closeMobileMenu("SignIn")}
            >
              Sign In
            </Link>
          </li>
        </ul>
        {isSignUp ? (
          <li className="nav-item">
            <Link
              to="/signIn"
              className={"btn"}
              onClick={() => closeMobileMenu("SignIn")}
            >
              Sign In
            </Link>
          </li>
        ) : (
          <li className="nav-item">
            <Link
              to="/account"
              className={"nav-linkss"}
              onClick={() => closeMobileMenu("Account")}
            >
              Account
            </Link>
          </li>
        )}
      </nav>
    </>
  );
}

export default Navbar;
