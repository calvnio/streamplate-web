import "./styles.css";
import React from "react";
import background from "../../../assets/background.jpg";
import Button from "@material-ui/core/Button";
import orbs from "../../../assets/divider-orbs.jpg";

const HomeScreen = () => {
  return (
    <div className="home-container">
      <img src={background} className="home-background" alt="background" />
      <div className="home-header">
        Control your lifestyle
        <div>Your univseral health app</div>
        <Button variant="contained" color="black">
          Learn more
        </Button>
      </div>
      <img src={orbs} className="home-divider" alt="orb" />
    </div>
  );
};

export default HomeScreen;
