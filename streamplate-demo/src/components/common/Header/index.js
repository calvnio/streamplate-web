import "./styles.css";
import React, { useState, useEffect } from "react";
import logo from "../../../assets/logo.jpg";
import Button from "@material-ui/core/Button";

const Header = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const headerClass = useEffect(() => {
    setDimensions({ height: window.innerHeight, width: window.innerWidth });
  });

  return (
    <div className="nav-container">
      <div className="nav-header">
        {dimensions.width <= 600 && <div></div>}
        <div>
          <img src={logo} className="nav-logo" alt="logo" />
        </div>
        {dimensions.width > 600 ? (
          <div className="nav-links">
            <div>
              <Button style={{ width: 80 }}>App</Button>
            </div>
            <div>
              <Button style={{ width: 80 }}>Orb</Button>
            </div>
            <div>
              <Button style={{ width: 80 }}>Contact</Button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Header;
