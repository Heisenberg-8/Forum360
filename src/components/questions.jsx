import React, { useState, useEffect } from "react";
import Message from "./Message.jsx";
import Comments from "./comments";
import Agenda from "./Agenda.jsx";
import Answered from "./Answered.jsx";
import { fetchQuestions } from "./data.jsx";
import Data from "./data.jsx";


function Feedback() {
  const { comments } = Data();
  const [currentScreen, setCurrentScreen] = useState("");
  const [fadeContainerVisible, setFadeContainerVisible] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const commentCount = comments.length;

  useEffect(() => {
    fetchQuestions()
      .then(questionsData => {
        setQuestions(questionsData);
        setIsLoading(false);
      });
  }, []);

  const messageCount = questions.length;

  function handleMessagingClick() {
    setCurrentScreen("messaging");
  }

  function handleCommentsClick() {
    setCurrentScreen("comments");
  }

  function handleAgendaClick() {
    setCurrentScreen("agenda");
  }

  function handleAnsweredClick() {
    setCurrentScreen("answered");
  }

  function handleViewAllClick() {
    setFadeContainerVisible(false);
  }

  if (isLoading) {
    return (
      <div className="loading-spinner"></div>
    );
  }

  if (currentScreen === "messaging") {
    return <Message />;
  }

  if (currentScreen === "agenda") {
    return <Agenda />;
  }

  if (currentScreen === "comments") {
    return <Comments />;
  }

  if (currentScreen === "answered") {
    return <Answered />;
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
        <button name="questions" className="feedback-button">
          <span className="h3" style={{ marginLeft: "-5px" }}>Questions</span>
          <div className="message-count" style={{ marginLeft: "10px" }}><span className="count">{messageCount}</span></div>
        </button>
        <button
          name="comments"
          className="feedback-button"
          style={{ border: "none", marginLeft: "-5px" }}
          onClick={handleCommentsClick}
        >
          <span className="h4">Comments</span>
          <div className="message-count" style={{ marginLeft: "10px" }}><span className="count">{commentCount}</span></div>
        </button>
      </div>
      <div className="questions-container">
        {questions.map((question, index) => (
          <div className="question" key={index}>
            <text className="question-username">
              {question.FullChannel}
              <span className="time">{question.QuestionTime}</span>
            </text>
            <div className="question-text">
              <text>{question.Question}</text>
            </div>
            <div className="question-footer">
              <btn className="text-btn1">Move to agenda</btn>
              <btn className="text-btn1" style={{ marginLeft: 30 }}>
                Send to IRP
              </btn>
            </div>
          </div>
        ))}
      </div>
      {fadeContainerVisible && (
        <div className="fade">
          <button className="viewAll-button" onClick={handleViewAllClick}>
            View All
          </button>
        </div>
      )}
      <div className="footer">
        <button className="text-btn" onClick={handleAgendaClick}>
          Agenda
        </button>
        <button className="text-btn" onClick={handleAnsweredClick} style={{ marginLeft: 10 }}>
          Answers
        </button>
      </div>
    </div>
  );
}

export default Feedback;
