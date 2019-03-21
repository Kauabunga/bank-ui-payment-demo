/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";

import { productsObject } from "../src/data";
import CartItem from "../src/components/CartItem";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20,
  },
  list: {
    margin: "0 auto",
    maxWidth: 500,
  },
  card: {
    margin: "24px 0",
  },
});

function Cart(props) {
  const { classes, cart, cartTotal, toggleProductId } = props;

  const noItems = !cart || !cart.length;
  const hasItems = !noItems;

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" gutterBottom>
        Cart
      </Typography>

      {hasItems && (
        <Fragment>
          <Card className={classes.card}>
            <List className={classes.list}>
              {cart.map(id => (
                <CartItem key={id} {...productsObject[id]} removeProduct={() => toggleProductId(id)} />
              ))}
            </List>
          </Card>

          <Link href="/checkout">
            <Button variant="contained" color="primary">
              Checkout ${cartTotal}
            </Button>
          </Link>
        </Fragment>
      )}

      {noItems && (
        <Link href="/">
          <Button variant="contained" color="primary">
            Add something to your cart
          </Button>
        </Link>
      )}
    </div>
  );
}

Cart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cart);
