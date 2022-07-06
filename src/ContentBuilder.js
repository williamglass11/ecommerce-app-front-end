import React from 'react'
import NavBar from './components/NavBar'
import ProductCards from './components/ProductCards'

import bodyBackground from './styles/bodyBackground.jpg'
import './styles/App.css'

const ContentBuilder = () => {
  return (
    <div className='mainPageContainer'>
    <NavBar />
    <img src={bodyBackground} alt='shop Background'/>
      <div className='cardContainer'>
        <ProductCards />
      </div>
    </div>
  )
}

export default ContentBuilder