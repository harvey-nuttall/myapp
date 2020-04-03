import React from "react";
import logo from "./logo.svg";
import holly from "./holly.jpg";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import GetUsers from "./components/atoms/getUsers";
const client = new ApolloClient({
  uri: "http://localhost:4000/",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={holly} className="App-logo" alt="logo" />
          <GetUsers />
          <a
            className="App-link"
            href="https://google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fun BirthDay Link
          </a>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
