import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Booking, Dashboard, Landing, Login, Register } from "../pages";

function App() {
  return (
    <Router>
      <>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          {/* <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/quote">
            <QuoteBudget />
          </Route> */}
        </Switch>
      </>
    </Router>
  );
}

export default App;
