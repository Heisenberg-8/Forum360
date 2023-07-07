import React, { useState } from "react";
import Tab from "./Tab"; // Import the Tab component

function Feedback() {
  const [currentScreen, setCurrentScreen] = useState("");

  function handleMessagingClick() {
    setCurrentScreen("messaging");
  }

  // Render different screens based on the currentScreen state
  if (currentScreen === "messaging") {
    return <Tab />;
  }

  return (
    <div>
    <div className="tab-background">
      <img src={require("./assets/logo.png")} alt="logo" className="logo" />
      <h1 className="h1">
        Relate <span className="h2">Tools</span>
      </h1>
      <img
        src={require("./assets/menu (2).png")}
        alt="logo"
        className="menu"
      />
    </div>
    <div>
      <div className="buttons">
        <button
          type="button"
          name="messaging"
          onClick={handleMessagingClick}
          className="button"
        >
          <img
            src={require("./assets/messaging.png")}
            alt="logo"
            className="message"
          />
          <span className="button-text">Messaging</span>
        </button>
        <button type="button" name="feedback" className="button">
          <img
            src={require("./assets/feedback.png")}
            alt="logo"
            className="message"
          />
          <span className="button-text">Feedback</span>
        </button>
      </div>
      <div className="buttons1">
        <button type="button" name="analytics" className="button">
          <img
            src={require("./assets/chart.png")}
            alt="logo"
            className="message"
          />
          <span className="button-text">Analytics</span>
        </button>
        <button type="button" name="resources" className="button">
          <img
            src={require("./assets/file.png")}
            alt="logo"
            className="file"
          />
          <span className="button-text" style={{ marginLeft: "10px" }}>Resources</span>
        </button>
      </div>
    </div>
    <div className="feedback-container">
      <button name="questions" className="feedback-button">
        <span className="h3">Questions</span>
      </button>
      <button name="comments" className="feedback-button" style={{ border: "none" }}>
        <span className="h4">Comments</span>
      </button>
    </div>
  </div>
  )  }

export default Feedback;
