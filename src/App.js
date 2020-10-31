import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Processing from "./pages/Home/Processing";
import Inventory from "./pages/Inventory/Inventory";
import AssignOrder from "./pages/DeliveryMan/AssignOrder";
import CheckStatus from "./pages/DeliveryMan/CheckStatus";

export class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home/processing" component={Processing} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/delivery_man/assign_order" component={AssignOrder} />
          <Route path="/delivery_man/check_status" component={CheckStatus} />
        </Switch>
      </Router>
    );
  }
}

export default App;
