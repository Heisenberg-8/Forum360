import React, { useState, useEffect } from "react";
import Message from "./Message.jsx";
import Comments from "./comments.jsx";
import Agenda from "./Agenda.jsx";
import Answered from "./Answered.jsx";
import Questions from "./questions.jsx"
import Feedback from "./questions.jsx";
import { SubmitComment, SubmitQuestion, SubmitReview, SubmitThumbsDown, SubmitThumbsUp } from "./data.jsx";
import { getToken, getUserkey } from "./token.js";
import './resources.css';

import ai from './assets/ai.svg';
import addComment from './assets/addComment.svg';
import thumbdislike from './assets/thumbdislike.svg';
import thumblike from './assets/thumblike.svg';
import expand from './assets/expand.svg';
import pin from './assets/pin.svg';
import user1 from './assets/user1.png';
import user2 from './assets/user2.png';
import edit from './assets/edit.png';
import link from './assets/link.svg';
import Select from "react-select";

function Resources() {
    const [currentScreen, setCurrentScreen] = useState("");
    const [commentInput, setCommentInput] = useState("");
    const [questionInput, setQuestionInput] = useState("");
    const [reviewInput, setReviewInput] = useState("");
    // const [selectedQuickMessage, setSelectedQuickMessage] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    const token = getToken()
    const userkey = getUserkey()
    const [expanded, setExpanded] = useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    function handleMessagingClick() {
        setCurrentScreen("messaging");
    }

    function handleFeedbackClick() {
        setCurrentScreen("feedback");
    }

    // if (isLoading) {
    //   return (
    //     <div className="loading-spinner"></div>
    //   );
    // }

    if (currentScreen === "messaging") {
        return <Message />;
    }

    if (currentScreen === "feedback") {
        return <Feedback />;
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
                        onClick={handleFeedbackClick}
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
                    <button type="button" name="analytics" className="button" style={{ backgroundColor: "#232cff", color: "#ffffff", border: "1px solid white", }}>
                        <img
                            src={require("./assets/WhiteChart.png")}
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

        </div>
    );
}

export default Resources;