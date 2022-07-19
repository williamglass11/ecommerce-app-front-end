import React from 'react'
import NavBar from './NavBar/NavBar'
import ProductCards from './ProductCards'
import Grid from '@mui/material/Grid';

import book from '../styles/BatteredBookImage.webp'
import shoes from '../styles/03-crocs-by-carrots-gq-september-2020.webp'
import hat from '../styles/hat.jpg'
import controller from '../styles/61sQsA4NpXL._AC_SX679_.jpg'
import headset from '../styles/headset.webp'
import logo from '../styles/logo192.png'
import '../styles/App.css'

const products = [
  {id: 1, name: 'book', description: 'a wonderful book to read on your own time', image: book},
  {id: 2, name: 'shoes', description: 'nike running shoes', image: shoes},
  {id: 3, name: 'hat', description: 'you can wear this thing on your head its insane', image: hat },
  {id: 4, name: 'controller', description: 'used to control input into a computing device, such as a game', image: controller},
  {id: 5, name: 'headset', description: 'can be used to hear audio output from a device', image: headset},
  {id: 6, name: 'bread', description: 'tasty', image: logo},
  {id: 7, name: 'toilet', description: 'you know what it is', image: logo}
]

const ContentBuilder = () => {
  
  return (
    <div className='mainPageContainer' data-testid='mainPageContainer'>
    <NavBar />
      <div className='cardContainer'>
        <Grid container justify='center' spacing={2.5} style={{ margin: 2 }}>
            <ProductCards
              products={products}
            />
        </Grid>
      </div>
    </div>
  )
}

export default ContentBuilder