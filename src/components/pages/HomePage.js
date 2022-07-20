import React from 'react';


import '../../styles/HomePage.css';

const HomePage = () => {
  return (
    <div>
    <div className='topSpaceWithLogo'>
        <div className='largeMessage'>
            Simple, Fast, Ecommerce Solutions
        </div>
        <img className='reactLogo' alt='React Logo' src={require('../../styles/react-icon-dark.jpg')}/>
    </div>
    </div>
  )
}

export default HomePage