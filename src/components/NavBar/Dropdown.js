import React, { useState } from 'react';
import { MenuItems } from './MenuItems.js';
import '../../styles/Dropdown.css';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <div
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
