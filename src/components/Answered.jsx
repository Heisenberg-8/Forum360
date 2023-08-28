import React, { useState, useEffect } from "react";
import Message from "./Message.jsx";
import Comments from "./comments";
import Questions from "./questions"
import Agenda from "./Agenda.jsx";
import { getToken, getRole, getUserkey } from "./token";
import Data, { getcomments } from "./data.jsx";
import { fetchAgenda, fetchQuestions, fetchAnswered, movebacktoAgenda } from "./data.jsx";
import Resources from "./resources.jsx";
import Analytics from "./Analytics/Analytics.jsx"
import { ColorRing } from "react-loader-spinner";


function Answered() {
    const token = getToken();
    const role = getRole()
    const [questions, setQuestions] = useState([]);
    const [currentScreen, setCurrentScreen] = useState("");
    const [expandedItems, setExpandedItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [agenda, setAgenda] = useState([]);
    const [answered, setAnswered] = useState([]);
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchAnswered(token)
            .then((agendaData) => {
                setAnswered(agendaData);
                setLoading(false);
            })
    }, []);

    useEffect(() => {
        fetchAgenda(token)
            .then((agendaData) => {
                setAgenda(agendaData);
                setLoading(false);
            })
    }, []);

    useEffect(() => {
        fetchQuestions(token)
            .then((agendaData) => {
                setQuestions(agendaData);
                setLoading(false);
            })
    }, []);

    useEffect(() => {
        getcomments(token)
            .then((questionsData) => {
                setComments(questionsData);
                setLoading(false);
            });
    }, []);

    const commentCount = comments.length;
    const agendaCount = agenda.length;
    const questioncount = questions.length;
    const answeredCount = answered.length;

    async function handlemovebacktoagendaclick(questionid) {
        await movebacktoAgenda(token, questionid);
        setLoading(true)
        fetchAnswered(token)
            .then((agendaData) => {
                setAnswered(agendaData);
                setLoading(false);
            })
        fetchAgenda(token)
            .then((agendaData) => {
                setAgenda(agendaData);
                setLoading(false);
            })
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

    function handleAgendaClick() {
        setCurrentScreen("agenda")
    }

    function handleResourcesClick() {
        setCurrentScreen("resources")
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

    if (currentScreen === "agenda") {
        return <Agenda />;
    }

    if (currentScreen === "questions") {
        return <Questions />;
    }

    if (currentScreen === "comments") {
        return <Comments />;
    }

    if (currentScreen === "resources") {
        return <Resources />
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
            </div>
            <div className="mainbuttons" style={{ display: "flex", marginTop: "25px", flexWrap: "wrap" }}>
                {role === 'host' && (
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
                )}

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
                {role === 'host' && (
                    <button type="button" name="analytics" className="button" onClick={handleAnalyticsClick}>
                        <img
                            src={require("./assets/chart.png")}
                            alt="logo"
                            className="message"
                        />
                        <span className="button-text">Analytics</span>
                    </button>
                )}
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
            {role === 'host' && (
                <div className="feedback-container">
                    <button
                        name="questions"
                        className="feedback-button"
                        style={{ border: "none" }}
                        onClick={handleQuestionsClick}
                    >
                        <span className="h4">Questions</span>
                        <div className="message-count" style={{ marginLeft: "10px" }}>
                            <span className="count">{questioncount}</span>
                        </div>
                    </button>
                    <button
                        name="comments"
                        className="feedback-button"
                        style={{ border: "none" }}
                        onClick={handleCommentsClick}
                    >
                        <span className="h4">Comments</span>
                        <div className="message-count" style={{ marginLeft: "5px" }}>
                            <span className="count">{commentCount}</span>
                        </div>
                    </button>
                </div>
            )}
            <div className="feedback-container1">
                <button
                    name="questions"
                    className="feedback-button"
                    style={{ border: "none" }}
                    onClick={handleAgendaClick}
                >
                    <span className="h4">Agenda</span>
                    <div className="message-count" style={{ marginLeft: "10px" }}>
                        <span className="count">{agendaCount}</span>
                    </div>
                </button>
                <button
                    name="comments"
                    className="feedback-button"
                >
                    <span className="h3">Resolved</span>
                    <div className="message-count" style={{ marginLeft: "10px" }}>
                        <span className="count">{answeredCount}</span>
                    </div>
                </button>
            </div>
            {loading ? (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50%", marginTop: "30px" }}>
                    <ColorRing
                        visible={true}
                        height="50"
                        width="50"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#232cff', '#232cff', '#232cff', '#232cff', '#232cff']}
                    />
                </div>
            ) : (
                <div className="agenda-container" >
                    {answered.map((agendaItem, index) => (
                        <div key={index} className="agenda-questions" style={{ width:'86 %' }}>
                            <div className="agenda-text" style={{ marginLeft:"0%", width:'80%' }}>
                                <div style={{ display: "flex" }}>
                                <div style={{display: "flex",width:"fit-content",}}>
                                    <text className="question-username" style={{whiteSpace:"nowrap"}}>{agendaItem.FullName}
                                    <span className="time"style={{width:"fit-content"}}>{agendaItem.QuestionTime}</span>
                                    </text>
                                    </div>
                                  <div style={{display:"flex"}}>
                                  
                                    {agendaItem.QuestionStatus === 909 && (
                                        <div className="irp-text" style={{height:"fit-content",width:"fit-content",marginLeft:"30%"}} >
                                            <text style={{whiteSpace: 'nowrap'}}>Sent To IRP</text>
                                        </div>
                                    )}
                                    {agendaItem.QuestionStatus !== 909 && (
                                <div className="control control-checkbox" style={{marginLeft:"370%"}}>
                                    <input
                                        type="checkbox"
                                        id={`myCheckbox${index}`}
                                        onClick={() => handlemovebacktoagendaclick(agendaItem.QuestionId)}
                                        defaultChecked={agendaItem.QuestionStatus !== 909} />
                                    <label htmlFor={`myCheckbox${index}`} className="control_indicator"></label>
                                </div>
                            )}
                            </div>
                                    
                                </div>
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
                            

                        </div>
                    ))}
                </div>
            )}


        </div>
    );
}

export default Answered;