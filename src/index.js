import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Datavariables from "./contexts/Datavariables";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BACKEND_URL } from "./helper";

const client = new ApolloClient({
  uri: `${BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Datavariables>
          <App />
        </Datavariables>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
