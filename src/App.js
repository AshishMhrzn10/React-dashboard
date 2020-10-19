import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Order from "./pages/order";

export class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/order" component={Order} />
        </Switch>
      </Router>
    );
  }
}

export default App;
