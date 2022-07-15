import React from 'react'

import '../styles/App.css'

const logInTest = false;

const NavBar = () => {
  return (
    <div className='HeaderBanner'>
        <div className='mainTitle'>
            <button data-testid='eCommerceButton'>
                eCommerce
            </button>
        </div>
        <div className='navButtonsHolder'>
            <div>
                <button className='navButtons'>
                    Home
                </button>
            </div>
            <div>
                <button className='navButtons'>
                    Products
                </button>
            </div>
            <div>
                <button className='navButtons'>
                    About
                </button>
            </div>
            {logInTest ? 
                <div>
                    <button className='navButtons'>
                        Account
                    </button>
                </div> : 
                <div>
                    <button className='signUp'>
                        Signup
                    </button>
                </div>
            }
        </div>
    </div>
  )
}

export default NavBar