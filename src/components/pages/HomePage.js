import React from 'react';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

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
      <div className='bottomHalfHome'>
        <div className='titleText'>
          Amazon is wack We are better
        </div>
        <div className='infoContainer'>
          <h1 className='info'>
            Fast Shipping
            <p>
              Warehouses in every major city facilitate next day shipping to most states within the US. We are
              dedicated to ensuring that there will be a timely shipment of all goods with a 100% refund guarantee
            </p>
            <AccessTimeIcon fontSize='large'/>
          </h1>
          <h1 className='info'>
            Fast Shipping
            <p>
            Warehouses in every major city facilitate next day shipping to most states within the US. We are
              dedicated to ensuring that there will be a timely shipment of all goods with a 100% refund guarantee
            </p>
            <AccessibilityIcon fontSize='large'/>
          </h1>
          <h1 className='info'>
            Fast Shipping
            <p>
            Warehouses in every major city facilitate next day shipping to most states within the US. We are
              dedicated to ensuring that there will be a timely shipment of all goods with a 100% refund guarantee
            </p>
            <CurrencyBitcoinIcon fontSize='large'/>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default HomePage