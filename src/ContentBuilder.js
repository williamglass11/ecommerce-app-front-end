import React from 'react'
import NavBar from './components/NavBar'

import bodyBackground from './styles/bodyBackground.jpg'
import './styles/App.css'

const ContentBuilder = () => {
  return (
    <div className='mainPageContainer'>
    <NavBar />
    <p>Hello</p>
    <img src={bodyBackground} alt='shop Background'/>
    </div>
  )
}

export default ContentBuilder