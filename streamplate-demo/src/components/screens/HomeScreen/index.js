import "./styles.css";
import React from "react";
import { MdRestaurantMenu } from "react-icons/md";
import venues from "../../../assets/venues-pic.jpg";
import background from "../../../assets/background.jpg";
import Button from "@material-ui/core/Button";
import orbs from "../../../assets/divider-orbs.jpg";

const HomeScreen = () => {
  return (
    <div className="home-container">
      <img src={background} className="home-background" />
      <div className="home-header">
        Control your lifestyle
        <div>Your univseral health app</div>
        <Button variant="contained" color="black">
          Learn more
        </Button>
      </div>
      <img src={orbs} className="home-divider" />
    </div>
  ); /*
  return (
    <div className="app-container">
      <div className="app-header">
        Control your lifestyle.
        <br />
        Be healthy.
      </div>
      <div className="app-icon-layout">
        <div>
          <div>
            <MdRestaurantMenu className="app-ordering-logo" />
          </div>
          <div>
            <MdRestaurantMenu className="app-ordering-logo" />
          </div>
          <div>
            <MdRestaurantMenu className="app-ordering-logo" />
          </div>

          <div>
            <MdRestaurantMenu className="app-ordering-logo" />
          </div>
          <div>
            <MdRestaurantMenu className="app-ordering-logo" />
          </div>
          <div>
            <MdRestaurantMenu className="app-ordering-logo" />
          </div>
        </div>
      </div>
    </div>
  );*/
};

export default HomeScreen;
