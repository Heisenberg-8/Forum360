import React, { useState, useEffect } from "react";
import Select from "react-select";
import Feedback from "./questions.jsx";
import "./App.css";

function Message() {
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
        { value: "red", label: "Send to all" },
        { value: "green", label: "Bob Vance" },
        { value: "yellow", label: "Micheal Scott" },
        { value: "blue", label: "Jim Halpert" },
        { value: "To all", label: "Dwight Shrute" },
    ];

    // function handleSelect(data) {
    //     setSelectedOptions(data);
    //     if (data && data.length > 0) {
    //         const selectedMessage = data[data.length - 1].value;
    //         setMessage(selectedMessage);
    //     }
    // }

    function handleParticipantSelect(data) {
        setSelectedParticipants(data);
    }

    function handleQuickMessageSelect(data) {
        setSelectedQuickMessage(data);
        if (data) {
            const selectedMessage = data.value;
            setSelectedQuickMessage(data);
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

            if (selectedQuickMessage) {
                const selectedMessage = selectedQuickMessage.value;
                if (selectedMessage === "welcome") {
                    console.log("Welcome message");
                } else if (selectedMessage === "rate") {
                    console.log("Rate & Review message");
                } else if (selectedMessage === "tech") {
                    console.log("Technical Issues message");
                } else if (selectedMessage === "delay") {
                    console.log("Meeting Delay message");
                }
            }
        }
    }

    function handleFeedbackClick() {
        setCurrentScreen("feedback");
    }

    if (currentScreen === "feedback") {
        return <Feedback />;
    }

    return (
        <div className="main-message">
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
                <div className="mainbuttons">
                    <div className="buttonsquestions">
                        <button
                            type="button"
                            name="messaging"
                            className="button center-content"
                            style={{
                                backgroundColor: "#232cff",
                                color: "#ffffff",
                                border: "1px solid white",
                            }}
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
                </div>
                <div className="body">
                    <h3 className="mh3">Event Messaging</h3>
                    <div className="container" style={{ marginTop: "-10px" }}>
                        <h3 className="mh3">To:</h3>
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
                    <div className="container" style={{ marginTop: "-5px" }}>
                        <h3 className="mh3">Subject</h3>
                        <input
                            type="text"
                            value={subject}
                            onChange={handleSubjectChange}
                            placeholder="Enter subject"
                            className="input-box"
                        />
                        <hr className="line" />
                    </div>
                    <div className="container" style={{ marginTop: "-5px" }}>
                        <div className="email-container">
                            <h3 className="mh3">Message</h3>
                            <div className="message-dropdown-container">
                                <select className="quick-message-dropdown">
                                    <option value="" selected disabled hidden>Quick Message</option>
                                    <option value="welcome" className="quickmessages">
                                        <span>
                                            <img src={require("./assets/Happy.png")} alt="Happy" className="dropdown-icon" />
                                            Welcome
                                        </span>
                                    </option>
                                    <option value="rate" className="quickmessages">
                                        <span>
                                            <img src={require("./assets/Happy.png")} alt="Rate" className="dropdown-icon" />
                                            Rate & Review
                                        </span>
                                    </option>
                                    <option value="tech" className="quickmessages">
                                        <span>
                                            <img src={require("./assets/Happy.png")} alt="Technical" className="dropdown-icon" />
                                            Technical Issues
                                        </span>
                                    </option>
                                    <option value="delay" className="quickmessages">
                                        <span>
                                            <img src={require("./assets/Happy.png")} alt="Delay" className="dropdown-icon" />
                                            Meeting Delay
                                        </span>
                                    </option>
                                </select>
                            </div>
                        </div>
                        <textarea
                            type="textarea"
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Enter message"
                            className="email-box"
                            rows={12}
                        />
                        <button onClick={handleSendMessage} className="send-button">
                            Send Message
                        </button>
                    </div>
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
        fontSize: "14px",
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: "#1F1F1F",
    }),
};

export default Message;