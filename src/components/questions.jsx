import React, { useState } from "react";
import Message from "./Message.jsx";
import Comments from "./comments";
import Agenda from "./Agenda.jsx"
import Answered from "./Answered.jsx";

function Feedback() {
  const [currentScreen, setCurrentScreen] = useState("");
  const [questions, setQuestions] = useState([
    {
      username: "Roger Vaccaro",
      time: "20:19:20",
      text: "Do fixed income investments on a 30 year period have higher returns?"
    },
    {
      username: "Roger Vaccaro",
      time: "20:19:20",
      text: "Do fixed income investments on a 30 year period have higher returns?"
    },
    {
      username: "Roger Vaccaro",
      time: "20:19:20",
      text: "Do fixed income investments on a 30 year period have higher returns?"
    },
    {
      username: "Roger Vaccaro",
      time: "20:19:20",
      text: "Do fixed income investments on a 30 year period have higher returns?"
    },
    {
      username: "Roger Vaccaro",
      time: "20:19:20",
      text: "Do fixed income investments on a 30 year period have higher returns?"
    },

  ]);

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
          <button
            type="button"
            name="feedback"
            className="button"
            style={{ backgroundColor: "#232cff", color: "#ffffff" }}
          >
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
            <span className="button-text" style={{ marginLeft: "10px" }}>
              Resources
            </span>
          </button>
        </div>
      </div>
      <div className="feedback-container">
        <button name="questions" className="feedback-button">
          <span className="h3">Questions</span>
        </button>
        <button
          name="comments"
          className="feedback-button"
          style={{ border: "none" }}
          onClick={handleCommentsClick}
        >
          <span className="h4">Comments</span>
        </button>
      </div>
      <div className="questions-container">
        {questions.map((question, index) => (
          <div className="question" key={index}>
            <text className="question-username">
              {question.username}
              <span className="time">{question.time}</span>
            </text>
            <div className="question-text">
              <text>{question.text}</text>
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
      <div className="footer">
        <button className="text-btn" onClick={handleAgendaClick}>Agenda</button>
        <button className="text-btn" onClick={handleAnsweredClick} style={{ marginLeft: 30 }}>
          Answers
        </button>
      </div>
    </div>
  );
}

export default Feedback;
