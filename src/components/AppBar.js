import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes, cartItems, cartTotal } = props;

  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
        <Toolbar>
          <Link href="/">
            <Typography variant="h5" color="inherit" className={classes.grow}>
              <span style={{ fontWeight: 700, color: "#148FE2" }}>demo</span>
              <span style={{ fontWeight: 700, color: "#FBCC48" }}>me</span>
            </Typography>
          </Link>

          <Link href="/cart" prefetch>
            <Button color="inherit">
              Cart {cartItems} ${cartTotal}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
