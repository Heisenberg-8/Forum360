import React, { useState, useEffect } from "react";
import Message from "./Message.jsx";
import Comments from "./comments";
import Agenda from "./Agenda.jsx";
import Resources from "./resources.jsx";
import Answered from "./Answered.jsx";
import { fetchQuestions, movetoAgenda, movetoAnswered } from "./data.jsx";
import Data from "./data.jsx";
import { getToken } from "./token";

function Feedback() {
  const { comments } = Data();
  const token = getToken();
  const [currentScreen, setCurrentScreen] = useState("");
  const [fadeContainerVisible, setFadeContainerVisible] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedItems, setExpandedItems] = useState([]);


  const commentCount = comments.length;

  useEffect(() => {
    fetchQuestions(token)
      .then((questionsData) => {
        setQuestions(questionsData);
        setIsLoading(false);
      });
  }, []);

  const messageCount = questions.length;

  async function handleSendtoIRPClick(questionKey, questionid) {
    await handleMoveToAgendaClick(questionKey)
    await movetoAnswered(token, questionid);
    fetchQuestions(token)
      .then((agendaData) => {
        setQuestions(agendaData);
      })
  }

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

  function handleResourcesClick() {
    setCurrentScreen("resources");
  }

  async function handleMoveToAgendaClick(questionKey) {
    await movetoAgenda(token, questionKey);
    setIsLoading(true)
    fetchQuestions(token)
      .then((questionsData) => {
        setQuestions(questionsData);
        setIsLoading(false);
      });
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

  if (currentScreen === "original") {
    return <Feedback />
  }

  if (currentScreen === "resources") {
    return <Resources />;
  }

  function toggleExpand(index) {
    setExpandedItems((prevExpandedItems) => {
      const updatedExpandedItems = [...prevExpandedItems];
      updatedExpandedItems[index] = !updatedExpandedItems[index];
      return updatedExpandedItems;
    });
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
          <button type="button" name="analytics" className="button">
            <img
              src={require("./assets/chart.png")}
              alt="logo"
              className="message"
            />
            <span className="button-text">Analytics</span>
          </button>
          <button
            type="button"
            name="resources"
            className="button"
            onClick={handleResourcesClick}>
            <img
              src={require("./assets/file.png")}
              alt="logo"
              className="file"
            />
            <span
              className="button-text"
              style={{ marginLeft: "10px" }}>
              Resources
            </span>
          </button>
        </div>
      </div>
      <div className="feedback-container">
        <button name="questions" className="feedback-button">
          <span className="h3" style={{ marginLeft: "-5px" }}>Questions</span>
          <div className="message-count" style={{ marginLeft: "10px" }}>
            <span className="count">{messageCount}</span>
          </div>
        </button>
        <button
          name="comments"
          className="feedback-button"
          style={{ border: "none", marginLeft: "-5px" }}
          onClick={handleCommentsClick}
        >
          <span className="h4">Comments</span>
          <div className="message-count" style={{ marginLeft: "10px" }}>
            <span className="count">{commentCount}</span>
          </div>
        </button>
      </div>
      <div className="main-cont">
        <div className="questions-container">
          {questions?.map((question, index) => (
            <div className="question" key={index}>
              <text className="question-username">
                {question.FullName}
                <span className="time">{question.QuestionTime}</span>
              </text>
              <div className="question-text">
                {expandedItems[index] ? (
                  <text>{question.Question}</text>
                ) : (
                  <>
                    <text>{question.Question.substring(0, 45)}</text>
                    {question.Question.length > 45 && (
                      <button
                        className="read-more-button"
                        onClick={() => toggleExpand(index)}
                      >
                        ...<span className="read-more-text">View More</span>
                      </button>
                    )}
                  </>
                )}
              </div>
              {expandedItems[index] && (
                <button
                  className="read-more-button"
                  onClick={() => toggleExpand(index)}
                >
                  <span className="read-more-text">View Less</span>
                </button>
              )}
              <div className="question-footer">
                <btn
                  className="text-btn1"
                  onClick={() => handleMoveToAgendaClick(question.QuestionKey)}
                >
                  Move to agenda
                </btn>
                <btn
                  className="text-btn1"
                  style={{ marginLeft: 30 }}
                  onClick={() => handleSendtoIRPClick(question.QuestionKey, question.QuestionId)}>
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
      </div>
      <div className="footer">
        <button className="text-btn" onClick={handleAgendaClick}>
          Agenda
        </button>
        <button className="text-btn" onClick={handleAnsweredClick} style={{ marginLeft: 10 }}>
          Resolved
        </button>
      </div>
    </div>
  );

}

export default Feedback;