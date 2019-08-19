import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from "react-router-dom";
// import registerServiceWorker from "./registerServiceWorker";
import { unregister } from "./registerServiceWorker";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { InMemoryCache, defaultDataIdFromObject } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { setContext } from "apollo-link-context";
import ScrollToTop from 'react-router-scroll-top'

import "./styles/index.css";
import "react-virtualized/styles.css"; // only needs to be imported once
// import 'bootstrap/dist/css/bootstrap.css';
import "./styles/custom.css";

// // Pass your GraphQL endpoint to uri
// const client = new ApolloClient({
//   // There is currently a outstanding pull request which should fix this approach
//   // https://github.com/apollographql/apollo-client/pull/3056 - waiting for fix
//   // if not fixed, fall back to old solution here:
//   // https://github.com/gpsimpact/polaris/blob/master/frontend/src/index.js
//   // request: async operation => {
//   //   const token = await localStorage.getItem('token');
//   //   operation.setContext({
//   //     headers: {
//   //       Authorization: token ? `${token}` : null,
//   //     },
//   //   });
//   // },
// });

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      // eslint-disable-next-line no-console
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  // eslint-disable-next-line no-console
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = createHttpLink({
  // uri: "/graphql", //process.env.REACT_APP_APOLLO_ENDPOINT || "http://localhost:5000/graphql"
  uri: "https://mainstream-relational-gotv.herokuapp.com"
  // process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development"
  //   ? "http://localhost:3000"
  //   : "https://mainstream-relational-server.now.sh"
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : null
    }
  };
});

const link = ApolloLink.from([authLink, errorLink, httpLink]);

const cache = new InMemoryCache({
  dataIdFromObject: object => {
    switch (object.__typename) {
      case "voter":
        return object.state_file_id;
      default:
        return defaultDataIdFromObject(object); // fall back to default handling
    }
  }
});

const client = new ApolloClient({
  link,
  cache
});


const ApolloApp = () => (
  <BrowserRouter>
  <ScrollToTop>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ScrollToTop>
  </BrowserRouter>
);

ReactDOM.render(<ApolloApp />, document.getElementById("root"));
// registerServiceWorker();
unregister();
