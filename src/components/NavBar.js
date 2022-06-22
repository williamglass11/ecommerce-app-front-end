import React from 'react'

import '../App.css'

const NavBar = () => {
  return (
    <div className='HeaderBanner'>
        <div id='mainTitle' style={{color: 'white'}}>
            eCommerce
        </div>
        <div className='navButtons'>
            <div>
                <button>
                    Home
                </button>
            </div>
            <div>
                <button>
                    About
                </button>
            </div>
            <div>
                <button>
                    Products
                </button>
            </div>
            <div>
                <button>
                    Account
                </button>
            </div>
        </div>
    </div>
  )
}

export default NavBar