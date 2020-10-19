import React, { Component } from "react";
import { Button } from "react-bootstrap";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CancelIcon from "@material-ui/icons/Cancel";

import "./Navbar.css";
import { Navbar, FormControl, Form } from "react-bootstrap";
import SidebarData from "./SidebarData";

import { Link } from "react-router-dom";

export class NavBar extends Component {
  state = {
    sidebar: false,
  };

  showSidebar = () => {
    this.setState({ sidebar: !this.state.sidebar });
  };
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" className="navbar">
          <Navbar.Brand>
            <Link to="#" className="menu-bars">
              <MenuIcon onClick={this.showSidebar} />
            </Link>
          </Navbar.Brand>
          <Form inline className="ml-auto">
            <FormControl type="text" placeholder="Search" className="mr-3" />
            <Button className="mr-4">
              <SearchIcon />
            </Button>
          </Form>
          <Form inline className="ml-auto">
            <Button variant="light" className="mr-2">
              <MailOutlineIcon />
            </Button>
            <Button variant="light" className="mr-4">
              <NotificationsIcon />
            </Button>
            <Button variant="light">
              <AccountCircleIcon />
            </Button>
          </Form>
        </Navbar>
        <nav className={this.state.sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <span className="name">Ashish Maharjan</span>
              <Link to="#" className="menu-bars">
                <CancelIcon onClick={this.showSidebar} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    );
  }
}

export default NavBar;
