import React, { useState, useEffect } from "react";
import Message from "./Message.jsx";
import Feedback from "./questions.jsx";

function Resources() {
  const [currentScreen, setCurrentScreen] = useState("");
  // const [isLoading, setIsLoading] = useState(true);

  function handleMessagingClick() {
    setCurrentScreen("messaging");
  }

  function handleFeedbackClick() {
    setCurrentScreen("feedback")
  }

  // if (isLoading) {
  //   return (
  //     <div className="loading-spinner"></div>
  //   );
  // }

  if (currentScreen === "messaging") {
    return <Message />;
  }

  if (currentScreen === "feedback") {
    return <Feedback />;
  }


  return (
    <div className="main">
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
      <div className="">
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
          <button
            type="button"
            name="feedback"
            className="button"
          >
            <img
              src={require("./assets/whitefeedback.png")}
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
          <button type="button" name="resources" className="button" style={{ backgroundColor: "#232cff", color: "#ffffff", border: "1px solid white", }}>
            <img
              src={require("./assets/file.png")}
              alt="logo"
              className="file"
            />
            <span
              className="button-text"
              style={{ marginLeft: "10px", }}>
              Resources
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resources;
