import React from "react";
import logo from "../../../logo.svg";

const Header = () => {
  return (
    <div className="component-header">
      <img src={logo} className="component-logo" />
      <div style={navStyle}>
        <div>Hello</div>
        <div>my name</div>
        <div>Calvin</div>
      </div>
    </div>
  );
};

const headerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "blue",
  padding: 10,
  margin: 10,
};

const navStyle = {
  display: "flex",
  flexDirection: "row",
  margin: 20,
};

const logoStyle = {
  height: 40,
};

export default Header;
