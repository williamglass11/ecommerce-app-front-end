import React from 'react'
import NavBar from './components/NavBar'
import RecipeReviewCard from './components/ProductCards'
import Grid from '@mui/material/Grid';

import bodyBackground from './styles/bodyBackground.jpg'
import './styles/App.css'

const products = [
  {id: 1, name: 'book', description: 'a wonderful book to read on your own time'},
  {id: 2, name: 'shoes', description: 'nike running shoes'}
]

const ContentBuilder = () => {
  return (
    <div className='mainPageContainer'>
    <NavBar />
      <div className='cardContainer' >
        <Grid container justify='center'>
          <Grid item xs={3}>
          <RecipeReviewCard />
          </Grid>
          <Grid item xs={3}>
          <RecipeReviewCard />
          </Grid>
          <Grid item xs={3}>
          <RecipeReviewCard />
          </Grid>
          <Grid item xs={3}>
          <RecipeReviewCard />
          </Grid>
          <Grid item xs={3}>
          <RecipeReviewCard />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default ContentBuilder