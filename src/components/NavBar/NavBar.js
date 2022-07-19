import React, { useState } from 'react';
import Dropdown from './Dropdown';

import '../../styles/Navbar.css';
import '../../styles/SignUpBtn.css';

const isSignUp = true;

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-logo' onClick={closeMobileMenu}>
          eCommerce
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <div 
            className='nav-links' 
            onClick={closeMobileMenu}
            >
              Home
            </div>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            {dropdown && <Dropdown />}
            </div>
          </li>
          <li className='nav-item'>
            <div
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </div>
          </li>
          <li className='nav-item'>
            <div
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </div>
          </li>
          <li>
            <div
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </div>
          </li>
        </ul>
        {isSignUp ? 
          <li className='nav-item'>
            <div className={'btn'}>
              Sign Up
            </div>
          </li> : 
          <li className='nav-item'>
            <div
            className={'nav-linkss'}
            >
              Account
            </div>
          </li>}
      </nav>
    </>
  );
}

export default Navbar;