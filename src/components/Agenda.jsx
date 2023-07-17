import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Message from "./Message.jsx";
import Comments from "./comments";
import Questions from "./questions";
import Answered from "./Answered.jsx";
import { getToken } from "./token";
import { fetchAgenda } from "./data.jsx";
import { updateAgenda } from "./agendaReducer";

function Agenda() {
  const [currentScreen, setCurrentScreen] = useState("");
  const dataList = useSelector((state) => state.dataList);
  const agenda = useSelector((state) => state.agenda);
  const dispatch = useDispatch();
  const token = getToken();
  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => {
    fetchAgenda(token)
      .then((agendaData) => {
        dispatch(updateAgenda(agendaData));
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const storedAgendaList = localStorage.getItem("agendaList");
    if (storedAgendaList) {
      dispatch(updateAgenda(JSON.parse(storedAgendaList)));
    }
  
    setIsLoading(false);
  }, []);
  

  function handleDragStart(event, index) {
    event.dataTransfer.setData("text/plain", index.toString());
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event, dropIndex) {
    const dragIndex = parseInt(event.dataTransfer.getData("text/plain"));
    if (dragIndex !== dropIndex) {
      const updatedAgendaList = [...agenda];
      [updatedAgendaList[dragIndex], updatedAgendaList[dropIndex]] = [
        updatedAgendaList[dropIndex],
        updatedAgendaList[dragIndex],
      ];
      dispatch(updateAgenda(updatedAgendaList));
  
      // Store the updated agenda list in local storage
      localStorage.setItem("agendaList", JSON.stringify(updatedAgendaList));
    }
  }

  function handleMessagingClick() {
    setCurrentScreen("messaging");
  }

  function handleQuestionsClick() {
    setCurrentScreen("questions");
  }

  function handleCommentsClick() {
    setCurrentScreen("comments");
  }

  function handleAnsweredClick() {
    setCurrentScreen("answered");
  }

  if (isLoading) {
    return <div className="loading-spinner"></div>;
  }

  if (currentScreen === "messaging") {
    return <Message />;
  }

  if (currentScreen === "questions") {
    return <Questions />;
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
            style={{
              backgroundColor: "#232cff",
              color: "#ffffff",
              border: "1px solid white",
            }}
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
        <button name="questions" className="feedback-button">
          <span className="h3">Agenda</span>
        </button>
        <button
          name="comments"
          className="feedback-button"
          style={{ border: "none" }}
          onClick={handleAnsweredClick}
        >
          <span className="h4">Answered</span>
        </button>
      </div>

      <div className="agenda-container">
        {agenda.map((agendaItem, index) => (
          <div
            className="agenda-questions"
            key={index}
            draggable="true"
            onDragStart={(event) => handleDragStart(event, index)}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, index)}
          >
            <img
              src={require("./assets/drag.png")}
              alt="drag"
              className="dragicon"
            />
            <div className="agenda-text">
              <text className="question-username">{agendaItem.FullChannel}</text>
              <div className="question-text">
                <text>{agendaItem.Question}</text>
              </div>
            </div>
            <div className="control control-checkbox">
              <input type="checkbox" id={`myCheckbox${index}`} />
              <label
                htmlFor={`myCheckbox${index}`}
                className="control_indicator"
              ></label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Agenda;
