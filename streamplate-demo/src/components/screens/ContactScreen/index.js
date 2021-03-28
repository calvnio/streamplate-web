import "./styles.css";
import React, { useState } from "react";
import info from "../../../assets/contact-info.jpg";

const ContactScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form>
      <p>Send any feedback or questions by filling out the form below.</p>
      <div className="contact-container">
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            onChange={(text) => setName(text)}
            maxLength={20}
          />
          <br />
          <label>Email: </label>
          <input type="text" onChange={(text) => setEmail(text)} />
          <br />
          <label>Message: </label>
          <textarea
            className="message-box"
            type="text"
            onChange={(text) => setMessage(text)}
          />
          <br />
          <input type="submit" value="Submit" />
        </div>
        <img src={info} alt="contact" />
      </div>
    </form>
  );
};

export default ContactScreen;
