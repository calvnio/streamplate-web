import "./styles.css";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const AppScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return <div className="app-container">This is the app screen</div>;
};

export default AppScreen;
