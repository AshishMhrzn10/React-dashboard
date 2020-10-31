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
import Delivered from "./pages/DeliveryMan/Delivered";
import Pending from "./pages/DeliveryMan/Pending";
import DeliveredHome from "./pages/Home/DeliveredHome";
import PendingHome from "./pages/Home/PendingHome";

export class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home/processing" component={Processing} />
          <Route path="/home/delivered" component={DeliveredHome} />
          <Route path="/home/pending" component={PendingHome} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/delivery_man/assign_order" component={AssignOrder} />
          <Route path="/delivery_man/check_status" component={CheckStatus} />
          <Route path="/delivery_man/delivered" component={Delivered} />
          <Route path="/delivery_man/pending" component={Pending} />
        </Switch>
      </Router>
    );
  }
}

export default App;
