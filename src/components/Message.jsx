import React, { useState, useEffect } from "react";
import * as microsoftTeams from "@microsoft/teams-js";
import { app, teamsCore } from "@microsoft/teams-js";
import MediaQuery from "react-responsive";
import Select from "react-select";
import Feedback from "./questions.jsx";
import "./App.css";

function Message() {
    const [meetingId, setMeetingId] = useState("");
    const [userName, setUserName] = useState("");
    const [selectedOptions, setSelectedOptions] = useState();
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [chatMessages, setChatMessages] = useState([]);
    const [currentScreen, setCurrentScreen] = useState("tab");
    const [quickMessage, setQuickMessage] = useState("");
    const [selectedParticipants, setSelectedParticipants] = useState();
    const [selectedQuickMessage, setSelectedQuickMessage] = useState("");


    const optionList = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "yellow", label: "Yellow" },
        { value: "blue", label: "Blue" },
        { value: "To all", label: "To all" },
    ];

    const quickMessageOptions = [
        { value: "Hello", label: "Hello" },
        { value: "Goodbye", label: "Goodbye" },
        { value: "Thank you", label: "Thank you" },
        { value: "Please", label: "Please" },]

    function handleSelect(data) {
        setSelectedOptions(data);
        if (data && data.length > 0) {
            const selectedMessage = data[data.length - 1].value;
            setMessage(selectedMessage);
        }
    }
    
    function handleParticipantSelect(data) {
        setSelectedParticipants(data);
    }

    function handleQuickMessageSelect(data) {
        setSelectedQuickMessage(data);
        if (data && data.length > 0) {
            const selectedMessage = data[data.length - 1].value;
            setMessage(selectedMessage);
        }
    }

    function handleSubjectChange(event) {
        setSubject(event.target.value);
    }

    function handleMessageChange(event) {
        setMessage(event.target.value);
    }

    function handleSendMessage() {
        if (message.trim() !== "") {
            const newMessage = {
                sender: userName,
                subject: subject,
                content: message,
            };
            setChatMessages([...chatMessages, newMessage]);
            setMessage("");
            setSubject("");
        }
    }

    function handleFeedbackClick() {
        setCurrentScreen("feedback");
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
            <div>
                <div className="buttons">
                    <button type="button" name="messaging" className="button" style={{ backgroundColor: "#232cff", color: "#ffffff" }}
                    >
                        <img
                            src={require("./assets/whitemessage.png")}
                            alt="logo"
                            className="message"
                        />
                        <span className="button-text">Messaging</span>
                    </button>
                    <button type="button" name="feedback" onClick={handleFeedbackClick} className="button">
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
                        <span className="button-text" style={{ marginLeft: "10px" }}>Resources</span>
                    </button>
                </div>
                <h3 className="h3">Event Messaging</h3>
                <div className="container">
                    <h3 className="h3">To:</h3>
                    <div className="dropdown-container">
                    <Select
                        options={optionList}
                        placeholder="Select participant"
                        value={selectedParticipants}
                        onChange={handleParticipantSelect}
                        isSearchable={true}
                        isMulti={true}
                        styles={customStyles}
                    />
                    </div>
                    <hr className="line" />
                </div>
                <div className="container">
                    <h3 className="h3">Subject</h3>
                    <input
                        type="text"
                        value={subject}
                        onChange={handleSubjectChange}
                        placeholder="Enter subject"
                        className="input-box"
                    />
                    <hr className="line" />
                </div>
                <div className="container">
                    <h3 className="h3">Message</h3>
                    <div className="dropdown-container-QM">
                    <Select
                        options={quickMessageOptions}
                        placeholder="Quick Message"
                        value={selectedQuickMessage}
                        onChange={handleQuickMessageSelect}
                        isSearchable={true}
                        isMulti={true}
                        styles={customStyles}
                    />
                
                
                    </div>
                    <textarea
                        type="textarea"
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Enter message"
                        className="input-box"
                    />
                    <button onClick={handleSendMessage} className="send-button">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
}

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "#1F1F1F",
        borderRadius: "10px",
        border: "none",
        boxShadow: state.isFocused ? "0 0 0 2px #7C7C7C" : "none",
    }),
    input: (provided) => ({
        ...provided,
        color: "#ffffff",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#white" : "#1F1F1F",
        color: state.isSelected ? "#white" : "white",
        fontSize: "16px",
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: "#1F1F1F",
    }),
};

export default Message;