import React, { useState } from "react";
import Message from "./Message.jsx";
import Comments from "./comments";
import Questions from "./questions";
import Answered from "./Answered.jsx";

function Agenda() {
    const [currentScreen, setCurrentScreen] = useState("");
    const [checked, setChecked] = useState(false);
    const [dataList, setDataList] = useState([
        { username: "Roger Vaccaro", question: "Do fixed income investments on a 30-year period have higher returns?" },
        { username: "Aarin Kachroo", question: "Do fixed income investments on a 30-year period have higher returns?" },
        { username: "Alice Smith", question: "What is the impact of climate change on agriculture?" }
    ]);


    function handleDragStart(event, index) {
        event.dataTransfer.setData("text/plain", index.toString());
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDrop(event, dropIndex) {
        const dragIndex = parseInt(event.dataTransfer.getData("text/plain"));
        if (dragIndex !== dropIndex) {
            const updatedQuestions = [...dataList];
            [updatedQuestions[dragIndex], updatedQuestions[dropIndex]] = [
                updatedQuestions[dropIndex],
                updatedQuestions[dragIndex]
            ];
            setDataList(updatedQuestions);
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
                >
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
                {dataList.map((data, index) => (
                    <div className="agenda-questions" key={index}
                        draggable="true"
                        onDragStart={(event) => handleDragStart(event, index)}
                        onDragOver={handleDragOver}
                        onDrop={(event) => handleDrop(event, index)}>
                        <img src={require("./assets/drag.png")} alt="drag" className="dragicon" />
                        <div className="agenda-text">
                            <text className="question-username">{data.username}</text>
                            <div className="question-text">
                                <text>{data.question}</text>
                            </div>
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

export default Agenda;
