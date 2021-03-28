import "./styles.css";
import React from "react";
import { BiFoodMenu } from "react-icons/bi";

const AppScreen = () => {
  return (
    <div className="app-container">
      <div className="app-detail">
        Your personalised food ordering app.
        <br />
        With health tracking. For free.
      </div>
      <div className="app-features">
        <button>
          <div>
            <BiFoodMenu size={80} /> Food Ordering
          </div>
        </button>
      </div>
    </div>
  );
};

export default AppScreen;
