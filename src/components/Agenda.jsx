import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Message from "./Message.jsx";
import Comments from "./comments";
import Questions from "./questions";
import Answered from "./Answered.jsx";
import { getToken } from "./token";
import Resources from "./resources.jsx";
import Data from "./data.jsx";
import Analytics from "./Analytics/Analytics.jsx"
import { fetchAgenda, fetchQuestions, movetoAnswered, fetchAnswered } from "./data.jsx";
import { ColorRing } from "react-loader-spinner";


function Agenda() {
  const { comments } = Data();
  const [currentScreen, setCurrentScreen] = useState("");
  const token = getToken();
  const [isLoading, setIsLoading] = useState(true);
  const [agenda, setAgenda] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answered, setAnswered] = useState([]);
  const [expandedItems, setExpandedItems] = useState([]);
  const [draggedQuestionIndex, setDraggedQuestionIndex] = useState(null);
  const agendaCount = agenda.length;
  const [loading, setLoading] = useState(true); 


  useEffect(() => {
    fetchAgenda(token)
      .then((agendaData) => {
        setAgenda(agendaData);
        setLoading(false); 
      });
  }, []);

  useEffect(() => {
    fetchQuestions(token)
      .then((questionsData) => {
        setQuestions(questionsData);
        setLoading(false); 
      });
  }, [token]);

  useEffect(() => {
    fetchAnswered(token)
      .then((questionsData) => {
        setAnswered(questionsData);
        setLoading(false); 
      });
  }, []);

  async function handleMoveToAnsweredClick(questionid) {
    await movetoAnswered(token, questionid);
    setIsLoading(true);
    fetchAgenda(token)
      .then((agendaData) => {
        setAgenda(agendaData);
        setLoading(false); 
      })
    fetchAnswered(token)
      .then((questionsData) => {
        setAnswered(questionsData);
        setLoading(false); 
      });

  }

  const answeredCount = answered.length;
  const messageCount = questions.length;
  const commentCount = comments.length;

  function handleDragEnd(result) {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.index !== destination.index) {
      const updatedAgendaList = [...agenda];
      const [draggedItem] = updatedAgendaList.splice(source.index, 1);
      updatedAgendaList.splice(destination.index, 0, draggedItem);

      setAgenda(updatedAgendaList);
      setDraggedQuestionIndex(null);

      localStorage.setItem("agendaList", JSON.stringify(updatedAgendaList));
    }
  }

  function handleResourcesClick() {
    setCurrentScreen("resources");
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

  function toggleExpand(index) {
    setExpandedItems((prevExpandedItems) => {
      const updatedExpandedItems = [...prevExpandedItems];
      updatedExpandedItems[index] = !updatedExpandedItems[index];
      return updatedExpandedItems;
    });
  }

  function handleAnalyticsClick() {
    setCurrentScreen("analytics");
  }

  if (currentScreen === "analytics") {
    return <Analytics />
  }

  if (currentScreen === "resources") {
    return <Resources />;
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
        <button
          name="questions"
          className="feedback-button"
          style={{ border: "none" }}
          onClick={handleQuestionsClick}
        >
          <span className="h4" style={{ marginLeft: "-5px" }}>Questions</span>
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
      <div className="feedback-container1">
        <button name="questions" className="feedback-button">
          <span className="h3">Agenda</span>
          <div className="message-count" style={{ marginLeft: "10px" }}>
            <span className="count">{agendaCount}</span>
          </div>
        </button>
        <button
          name="comments"
          className="feedback-button"
          style={{ border: "none" }}
          onClick={handleAnsweredClick}
        >
          <span className="h4">Resolved</span>
          <div className="message-count" style={{ marginLeft: "10px" }}>
            <span className="count">{answeredCount}</span>
          </div>
        </button>
      </div>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50%",marginTop:"30px" }}>
                                <ColorRing
                                    visible={true}
                                    height="100"
                                    width="100"
                                    ariaLabel="blocks-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="blocks-wrapper"
                                    colors={['#232cff','#232cff','#232cff','#232cff','#232cff']}
                                />
                            </div>
                        ) : (
                          <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="agenda">
          {(provided) => (
            <div
              className="agenda-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {agenda.map((agendaItem, index) => (
                <Draggable key={index} draggableId={`agendaItem_${index}`} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className={`agenda-questions ${draggedQuestionIndex === index ? "dragged" : ""}`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        border: snapshot.isDragging ? "2px solid #232cff " : "none",
                        ...provided.draggableProps.style,
                      }}
                    >
                      <img
                        src={require("./assets/drag.png")}
                        alt="drag"
                        className="dragicon"
                      />
                      <div className="agenda-text">
                        <text className="question-username">{agendaItem.FullName}</text>
                        <div className="question-text">
                          {expandedItems[index] ? (
                            <text>{agendaItem.Question}</text>
                          ) : (
                            <>
                              <text>{agendaItem.Question.substring(0, 30)}</text>
                              {agendaItem.Question.length > 30 && (
                                <button
                                  className="read-more-button"
                                  onClick={() => toggleExpand(index)}
                                >
                                  ... <span className="read-more-text">View More</span>
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
                      </div>
                      <div className="control control-checkbox">
                        <input type="checkbox" id={`myCheckbox${index}`} onClick={() => handleMoveToAnsweredClick(agendaItem.QuestionId)} />
                        <label
                          htmlFor={`myCheckbox${index}`}
                          className="control_indicator"
                        ></label>
                      </div >
                    </div >
                  )
                  }
                </Draggable >
              ))}
              {provided.placeholder}
            </div >
          )}
        </Droppable >
      </DragDropContext >
                        )}
      
    </div >
  );
}

export default Agenda;