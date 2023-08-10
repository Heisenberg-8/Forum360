import React, { useState, useEffect } from "react";
import { getToken } from "./token";
import "./App.css";
import Data from "./data.jsx";
import { fetchQuestions, getcomments } from "./data.jsx";
import Message from "./Message.jsx";
import Resources from "./resources.jsx";
import Questions from "./questions";
import Analytics from "./Analytics/Analytics.jsx"

function Comments() {
  const token = getToken();
  const [currentScreen, setCurrentScreen] = useState("");
  const [fadeContainerVisible, setFadeContainerVisible] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuestions(token)
      .then((questionsData) => {
        setQuestions(questionsData);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getcomments(token)
      .then((commentsdata) => {
        setComments(commentsdata);
        console.log(commentsdata)
        setIsLoading(false);
      });
  }, []);

  const messageCount = questions.length;
  const commentCount = comments.length;

  const handleMessagingClick = () => {
    setCurrentScreen("messaging");
  };

  const handleQuestionsClick = () => {
    setCurrentScreen("questions");
  };

  const handleViewAllClick = () => {
    setFadeContainerVisible(false);
  };

  if (isLoading) {
    return (
      <div className="loading-spinner"></div>
    );
  }

  function handleAnalyticsClick() {
    setCurrentScreen("analytics");
  }

  if (currentScreen === "analytics") {
    return <Analytics />
  }

  if (currentScreen === "messaging") {
    return <Message />;
  }

  if (currentScreen === "questions") {
    return <Questions />;
  }

  function handleResourcesClick() {
    setCurrentScreen("resources");
  }

  if (currentScreen === "resources") {
    return <Resources />;
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
      <div className="mainbuttons">
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
            style={{ backgroundColor: "#232cff", color: "#ffffff", border: "1px solid white", }}
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
          <button type="button" name="analytics" className="button" onClick={handleAnalyticsClick}>
            <img
              src={require("./assets/chart.png")}
              alt="logo"
              className="message"
            />
            <span className="button-text">Analytics</span>
          </button>
          <button type="button" name="resources" className="button" onClick={handleResourcesClick}>
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
          <div className="message-count" style={{ marginLeft: "10px" }}><span className="count">{messageCount}</span></div>
        </button>
        <button
          name="comments"
          className="feedback-button"
        >
          <span className="h3" style={{ marginLeft: "-5px" }}>Comments</span>
          <div className="message-count" style={{ marginLeft: "10px" }}><span className="count">{commentCount}</span></div>
        </button>
      </div>
      <div className="main-cont">
        <div className="comments-container">
          {comments?.map((comment, index) => (
            <div
              className="question"
              key={index}
            >
              <text className="question-username">
                {comment.UserName}
                <span className="time">{comment.createDate}</span>
              </text>
              <div className="question-text">
                <text>{comment.comment}</text>
              </div>
            </div>
          ))}
        </div>
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