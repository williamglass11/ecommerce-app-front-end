import * as React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "../../styles/App.css";

const useStyles = makeStyles({
  root: {
    width: 290,
    height: 300,
    margin: 10,
  },
  media: {
    height: 140,
  },
});

export default function ProductCards(products) {
  const classes = useStyles();
  return (
    <>
      {products.products.map((product, index) => (
        <Grid item key={index}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              component="img"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="add to cart">
                <AddShoppingCart />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
}
