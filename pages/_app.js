import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import cookie from "cookie";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from "react-jss/lib/JssProvider";
import getPageContext from "../src/getPageContext";

import AppBar from "../src/components/AppBar";
import CartContainer from "../src/containers/CartContainer";

class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  static async getInitialProps({ ctx }) {
    if (process.browser) {
      return {};
    }

    const { req } = ctx;
    const { headers } = req;
    const { cookie: cookieHeader } = headers;
    const { COOKIE_CART_KEY } = cookie.parse(cookieHeader);
    const initialCart = (COOKIE_CART_KEY && COOKIE_CART_KEY.split(",")) || [];

    return {
      initialCart,
    };
  }

  render() {
    const { Component, pageProps, initialCart } = this.props;
    return (
      <Container>
        <Head>
          <title>DEMOME</title>
        </Head>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider registry={this.pageContext.sheetsRegistry} generateClassName={this.pageContext.generateClassName}>
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider theme={this.pageContext.theme} sheetsManager={this.pageContext.sheetsManager}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}
            <CartContainer
              initialState={initialCart}
              Layout={cartContainerProps => (
                <div>
                  <AppBar {...cartContainerProps} />
                  <Component {...cartContainerProps} pageContext={this.pageContext} {...pageProps} />
                </div>
              )}
            />
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default MyApp;
