import React, { useState } from "react";
import Message from "./Message.jsx";
import Questions from "./questions";
import Data from "./data.jsx";


function Comments() {
  const { comments } = Data();
  const [currentScreen, setCurrentScreen] = useState("");
  const [fadeContainerVisible, setFadeContainerVisible] = useState(true);

  const commentCount = comments.length;

  function handleMessagingClick() {
    setCurrentScreen("messaging");
  }

  function handleQuestionsClick() {
    setCurrentScreen("questions");
  }

  function handleViewAllClick() {
    setFadeContainerVisible(false);
  }

  if (currentScreen === "messaging") {
    return <Message />;
  }

  if (currentScreen === "questions") {
    return <Questions />;
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
          <button
            type="button"
            name="feedback"
            className="button"
            style={{ backgroundColor: "#232cff", color: "#ffffff" }}
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
          <button type="button" name="resources" className="button">
            <img
              src={require("./assets/file.png")}
              alt="logo"
              className="file"
            />
            <span className="button-text" style={{ marginLeft: "10px" }}>
              Resources
            </span>
          </button>
        </div>
      </div>
      <div className="feedback-container">
        <button name="questions"
          className="feedback-button"
          style={{ border: "none" }}
          onClick={handleQuestionsClick}>
          <span className="h4" style={{ marginLeft: "-5px" }}>Questions</span>
          {/* <div className="message-count" style={{ marginLeft: "10px" }}><span className="count">{messageCount}</span></div> */}
        </button>
        <button
          name="comments"
          className="feedback-button"
        >
          <span className="h3" style={{ marginLeft: "-5px" }}>Comments</span>
          <div className="message-count" style={{ marginLeft: "10px" }}><span className="count">{commentCount}</span></div>

        </button>
      </div>
      <div className="comments-container">
        {comments.map((comments, index) => (
          <div className="question" key={index}>
            <text className="question-username">
              {comments.username}
              <span className="time">{comments.time}</span>
            </text>
            <div className="question-text">
              <text>{comments.text}</text>
            </div>
          </div>
        ))}
        {fadeContainerVisible && (
          <div className="fade-comments">
            <button className="loadmore-button" onClick={handleViewAllClick}>
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Comments;
