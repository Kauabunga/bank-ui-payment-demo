/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";

import Product from "../src/components/Product";
import { products } from "../src/data";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 5,
  },
  product: {
    padding: 12,
  },
});

class Index extends React.Component {
  render() {
    const { classes, toggleProductId, isProductIdInCart } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="center" alignItems="center">
          {products.map(product => (
            <Grid key={product.id} item className={classes.product}>
              <Product {...product} toggleProductId={toggleProductId} isProductIdInCart={isProductIdInCart} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
