import React, { useState, useEffect } from "react";
import Message from "./Message.jsx";
import Comments from "./comments";
import Agenda from "./Agenda.jsx";
import Answered from "./Answered.jsx";
import Data from "./data.jsx";


function Feedback() {
  const { comments } = Data();
  const [currentScreen, setCurrentScreen] = useState("");
  const [fadeContainerVisible, setFadeContainerVisible] = useState(true);
  const [questions, setQuestions] = useState([]);

  const commentCount = comments.length;

  useEffect(() => {
    //return
    fetch('https://mgmt-test.forum360.co/api/PA_Event/InProgressQuestion/84573623-aa87-402c-b28d-24d1e181ecbe/2560', {
      headers: {
        Authorization: 'Bearer COJWkKhYanoNYTcF6c13SGcMtd-5gJy8wwvghVENkBHoYgjCUZcYgY3lIgJkWY_eAV4BDOOE9LphtW4iAfa3c_E40UJUBtpZ8ZXxiZiddgIxCI4uOgafJ-Mohnjv3WB90R_AL31lLxA45KXhyXhnfdvG0vd5rxEaGseASXORQw51cxi1sy6WffTzbMJSSOKI363IckErkuL7yTQnu2unQY6wlce5BuKJq5jmuBdNGMLgeQO5ixmjOVSIiRt-mEabQFqXh5n-hrVu1qB1_QwCdzsgBPLWFl3fBO90BZ7pQFsVpl2B0w2xuj-mCMWHXOX-9r9PZ7G8eQwhWi0eTFcUC_qkKCy8DLkf16X-IYM3vT1tjmwWAvZ4pt3lu-PVe0-NNmrd7cDKSTOIjEiPgZpXLP2lzQqEvz3iQp28571vIeGH_nssfdre_U5MT8nIbv3ao5HgnoGONG069aJCbt8V2yLpbKgNFxVIrz42rCXxk3U',
      },
    })
      .then(response => response.json())
      .then(json => {
        setQuestions(json.Payload.Audiences);
        //stop loader
      })
      .catch(error => console.error(error));
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
        {questions.map((questions, index) => (
          <div className="question" key={index}>
            <text className="question-username">
              {questions.FullChannel}
              <span className="time">{questions.QuestionTime}</span>
            </text>
            <div className="question-text">
              <text>{questions.Question}</text>
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
