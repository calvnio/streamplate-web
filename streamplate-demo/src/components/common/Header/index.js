import React from "react";
import logo from "../../../logo.svg";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="nav">
        <p>App</p>
        <p>Orb</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Header;
