
import * as React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { AddShoppingCart, FavoriteIcon, ShareIcon } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import logo192 from '../styles/logo192.png';

import '../styles/App.css'


export default function RecipeReviewCard() {
  return (
    // <Card className='card' sx={{ maxWidth: 345 }}>
    //   {/* <CardHeader
    //     avatar={
    //       <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
    //         R
    //       </Avatar>
    //     }
    //     action={
    //       <IconButton aria-label="settings">
    //         <MoreVertIcon />
    //       </IconButton>
    //     }
    //     title="Shrimp and Chorizo Paella"
    //     subheader="September 14, 2016"
    //   /> */}
    //   <CardMedia
    //     component="img"
    //     height="50"
    //     width='50'
    //     alt="Paella dish"
    //   />
    //   <CardContent>
    //     <Typography variant="body2" color="text.secondary">
    //       I wish this worked
    //     </Typography>
    //   </CardContent>
    //   <CardActions disableSpacing>
    //     <IconButton aria-label="add to favorites">
    //       <FavoriteIcon />
    //     </IconButton>
    //     <IconButton aria-label="share">
    //       <ShareIcon />
    //     </IconButton>
    //   </CardActions>
    // </Card>
    <Card className={classes.root}>
      <CardMedia className={classes.media} image='' title={product.name}/>
    </Card>

  );
}

