import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Auth from "./utils/auth";
import { CssBaseline } from "@material-ui/core";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <div>
            <Nav />
            <main>
              <Routes>
                <Route path="/" element={<Home title="Home" />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
