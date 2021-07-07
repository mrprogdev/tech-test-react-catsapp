import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import store from "./redux/store";
import './index.css';

import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./shared/ScrollToTop";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://server-cat-mongo.herokuapp.com/",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Helmet>
        <title>Ivo Digital Starter Project</title>
        <meta property="og:title" content="Ivo Digital Starter Project" />
        <meta property="og:site_name" content="Ivo Digital Starter Project" />
      </Helmet>
      <ScrollToTop>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
