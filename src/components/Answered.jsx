import React, { useState } from "react";
import Message from "./Message.jsx";
import Comments from "./comments";
import Questions from "./questions"
import Agenda from "./Agenda.jsx";


function Answered() {
    const [currentScreen, setCurrentScreen] = useState("");
    const [expandedItems, setExpandedItems] = useState([]);
    const [agenda, setAgenda] = useState([]);



    function handleMessagingClick() {
        setCurrentScreen("messaging");
    }

    function handleQuestionsClick() {
        setCurrentScreen("questions");
    }

    function handleCommentsClick() {
        setCurrentScreen("comments");
    }

    function handleAgendaClick() {
        setCurrentScreen("agenda")
    }

    if (currentScreen === "messaging") {
        return <Message />;
    }

    if (currentScreen === "agenda") {
        return <Agenda />;
    }

    if (currentScreen === "questions") {
        return <Questions />;
    }

    if (currentScreen === "comments") {
        return <Comments />;
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
                <img src={require("./assets/menu (2).png")} alt="logo" className="menu" />
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
                    <button type="button" name="feedback" className="button" style={{ backgroundColor: "#232cff", color: "#ffffff" }}>
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
                <button
                    name="questions"
                    className="feedback-button"
                    style={{ border: "none" }}
                    onClick={handleQuestionsClick}
                >
                    <span className="h4">Questions</span>
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
            <div className="feedback-container1">
                <button
                    name="questions"
                    className="feedback-button"
                    style={{ border: "none" }}
                    onClick={handleAgendaClick}
                >
                    <span className="h4">Agenda</span>
                </button>
                <button
                    name="comments"
                    className="feedback-button"
                >
                    <span className="h3">Resolved</span>
                </button>
            </div>
            <div className="agenda-container">
  {agenda.map((agendaItem, index) => (
    <div key={index} className="agenda-questions">
      <div className="agenda-text">
        <text className="question-username">{agendaItem.FullName}</text>
        <div className="question-text">
          {expandedItems[index] ? (
            <text>{agendaItem.Question}</text>
          ) : (
            <>
              <text>{agendaItem.Question.substring(0, 30)}</text>
              {agendaItem.Question.length > 30 && (
                <button className="read-more-button" onClick={() => toggleExpand(index)}>
                  ... <span className="read-more-text">View More</span>
                </button>
              )}
            </>
          )}
        </div>
        {expandedItems[index] && (
          <button className="read-more-button" onClick={() => toggleExpand(index)}>
            <span className="read-more-text">View Less</span>
          </button>
        )}
      </div>
      <div className="control control-checkbox">
        <input type="checkbox" id={`myCheckbox${index}`} />
        <label htmlFor={`myCheckbox${index}`} className="control_indicator"></label>
      </div>
    </div>
  ))}
</div>

        </div>
    );
}

export default Answered;
