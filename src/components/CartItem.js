import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  root: {},
});

function CartItem(props) {
  const { classes, id, removeProduct, name, image, price } = props;
  return (
    <Link href={`/detail?id=${id}`} className={classes.root}>
      <ListItem button>
        <Avatar src={image} />
        <ListItemText primary={name} secondary={price} />
        <ListItemSecondaryAction>
          <IconButton>
            <DeleteIcon onClick={removeProduct} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Link>
  );
}

CartItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CartItem);
