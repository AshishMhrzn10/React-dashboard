import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import DescriptionIcon from "@material-ui/icons/Description";
import PeopleIcon from "@material-ui/icons/People";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import MessageIcon from "@material-ui/icons/Message";
import SettingsIcon from "@material-ui/icons/Settings";
import HistoryIcon from "@material-ui/icons/History";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
    cName: "nav-text",
  },
  {
    title: "Order & Invoice",
    path: "/order",
    icon: <DescriptionIcon />,
    cName: "nav-text",
  },
  {
    title: "Manage Users",
    path: "/users",
    icon: <PeopleIcon />,
    cName: "nav-text",
  },
  {
    title: "Sales",
    path: "/sales",
    icon: <MonetizationOnIcon />,
    cName: "nav-text",
  },
  {
    title: "Inventory",
    path: "/inventory",
    icon: <CardGiftcardIcon />,
    cName: "nav-text",
  },
  {
    title: "Delivery Man",
    path: "/delivery_man/assign_order",
    icon: <SupervisedUserCircleIcon />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <MessageIcon />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
    cName: "nav-text",
  },
  {
    title: "History",
    path: "/history",
    icon: <HistoryIcon />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <ContactSupportIcon />,
    cName: "nav-text",
  },
];

export default SidebarData;
