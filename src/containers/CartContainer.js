import React, { useState } from "react";
import browserCookies from "browser-cookies";

import { productsObject } from "../data";

const COOKIE_CART_KEY = "COOKIE_CART_KEY";

export default ({ initialState, Layout }) => {
  const [cart, updateCart] = useState(getInitialState({ initialState }));

  const isProductIdInCart = id => cart.indexOf(id) !== -1;
  const toggleProductId = id => {
    const nextCartState = isProductIdInCart(id) ? cart.filter(currentId => currentId !== id) : [...cart, id];
    console.log("toggleProductId", id, nextCartState);
    setCartCookie(nextCartState);
    return updateCart(nextCartState);
  };

  const cartTotal = cart.reduce((acc, current) => acc + productsObject[current].price, 0).toFixed(2);
  const cartItems = cart.length;
  const cartObjects = cart.map(id => productsObject[id]);

  return (
    <Layout
      cart={cart}
      cartObjects={cartObjects}
      cartItems={cartItems}
      cartTotal={cartTotal}
      isProductIdInCart={isProductIdInCart}
      toggleProductId={toggleProductId}
    />
  );
};

function setCartCookie(cart) {
  browserCookies.set(COOKIE_CART_KEY, cart.join(","));
}

function getCartCookie() {
  const cartCookie = browserCookies.get(COOKIE_CART_KEY);
  return cartCookie && cartCookie.split(",");
}

function getInitialState({ initialState }) {
  if (process.browser) {
    return initialState || getCartCookie() || [];
  }

  return initialState || [];
}
