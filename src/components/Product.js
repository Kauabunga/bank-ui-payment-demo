import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 320,
  },
  cardContent: {
    height: 150,
  },
};

function MediaCard(props) {
  const { classes, toggleProductId, isProductIdInCart, id, name, price, image, description } = props;

  const href = `/detail?id=${id}`;

  return (
    <Card className={classes.card}>
      <Link href={href}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title="Contemplative Reptile" />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography component="p">{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Link>

      <CardActions>
        <Button size="small" color="primary" onClick={() => toggleProductId(id)}>
          {isProductIdInCart(id) ? `Remove from cart ${price}` : `Add to cart ${price}`}
        </Button>

        <Link href={href}>
          <Button size="small" color="secondary">
            More info
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
