import "./styles.css";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import orb_gif from "../../../assets/orb.gif";
import orb_pic from "../../../assets/orb.jpg";

const OrbScreen = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    setDimensions({ height: window.innerHeight, width: window.innerWidth });
  }, []);
  return (
    <div>
      <div className="orb-container">
        <div className="orb-about">
          <div>Serve a lasting impression.</div>
          Today, venues really only need one piece of hardware - a payment
          terminal. Other apps might offer 'in-depth data analytics' or
          'discounts' that might incentivise a venue to join, but we don't
          believe these type of add-ons provide long-term value to venues.
          Instead, we think the best way to support venues is to ensure that
          they have the best payment terminal possible. <br />
          <br />
          Payment terminals aren't designed to be memorable, and it's often the
          last interaction a customer has with a venue. We've flipped this, and
          built The Orb which has a lasting impression on the customer.
          <br />
          <br />
          The idea is simple: as the customer approaches The Orb, it starts to
          float.
          <br />
          <br />
          <Button variant="contained" color="black">
            Buy now
          </Button>
        </div>
        <div>
          {dimensions.width >= 1100 ? (
            <img src={orb_pic} className="orb-pic" alt="orb-pic" />
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <img src={orb_gif} className="orb-gif" alt="orb-gif" />
    </div>
  );
};

export default OrbScreen;
