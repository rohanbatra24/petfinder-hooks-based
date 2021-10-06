import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-DOM";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("purple");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt me!</h1>
            </Link>
          </header>
          <Switch>
            <Route exact path="/details/:id">
              <Details></Details>
            </Route>
            <Route path="/">
              <SearchParams></SearchParams>
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
