import "./styles.css";
import React, { useState, useEffect } from "react";
import logo1 from "../../../assets/logo1.jpg";
import logo2 from "../../../assets/logo2.jpg";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Header = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    setDimensions({ height: window.innerHeight, width: window.innerWidth });
  });

  return (
    <div>
      <div className="nav-container">
        <div className="nav-header">
          {dimensions.width <= 650 && <div></div>}
          <Link to="/">
            <div>
              {dimensions.width > 650 ? (
                <img src={logo1} className="nav-logo-1" alt="logo" />
              ) : (
                <img src={logo2} className="nav-logo-2" alt="logo" />
              )}
            </div>
          </Link>
          {dimensions.width > 650 ? (
            <div className="nav-links">
              <div>
                <Link to="/app">
                  <Button style={{ width: 80 }}>App</Button>
                </Link>
              </div>
              <div>
                <Link to="orb">
                  <Button style={{ width: 80 }}>Orb</Button>
                </Link>
              </div>
              <div>
                <Link to="contact">
                  <Button style={{ width: 80 }}>Contact</Button>
                </Link>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="nav-footer" />
    </div>
  );
};

export default Header;
