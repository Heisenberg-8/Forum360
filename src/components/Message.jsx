import React, { useState } from "react";
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
    const [selectedParticipants, setSelectedParticipants] = useState();
    const [selectedQuickMessage, setSelectedQuickMessage] = useState(null);

    const optionList = [
        { value: "red", label: "Send to all" },
        { value: "green", label: "Bob Vance" },
        { value: "yellow", label: "Micheal Scott" },
        { value: "blue", label: "Jim Halpert" },
        { value: "To all", label: "Dwight Shrute" },
    ];

    const quickMessageOptions = [
        { value: "welcome", label: "Welcome" },
        { value: "rate", label: "Rate & Review" },
        { value: "tech", label: "Technical Issues" },
        { value: "delay", label: "Meeting Delay" },
        { value: "custom", label: "Custom Message" },
    ];

    function handleParticipantSelect(data) {
        setSelectedParticipants(data);
    }

    function sendwelcome() {
        return fetch('https://mgmt-test.forum360.co/api/PA_Event/SendWelcome', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer -1leljERr74J_xVJlYOBVgnlwBcsXpfobmY8VW6Pvp-gFpzsDFsXQpJ3fSBX3k_tVZVLvwkE--Bd9wi9gLzI2tRsPxSqrM5zSP8IdN01j8m4-QSmhJG_CGV93z34ATgHQemf4FiiVh2LsAs6VdxOqVJKbb6t0MIyXRdd8js-WPEemNftAtXGLS22KmawdbvT6P3GBCrFwoghEnWmto7Tuaoj2hF6v4G9QjgmPavEYLvQzMvCQdTv0YRGtuUzmWlbv1TMsKOPGlVgKspIKwbSiz_DcatM7ph-6YNjSfAGlR-rIIrfc73j8y5wnkJQ0koBR1ZLhl5D6kqzcVrMxUUVhXfKXIfm6MxHYaKW4HQk6Kumhry5Ijrdoab05yXo5qufAi8gews5UBrrGkYMhaZYt9cUWdGO7YOgwvmFA38-iUXJXCqgzJUdPLSHZgxyO8g19yhFdHvVi07dTRwyyuY1_Jy9vNjhA5tP0pWSO1lKVbQ',
            },
            body: JSON.stringify({
                SessionId: '2560'
            })
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => {
                console.error(error);
                return [];
            });
    }

    function sendrate() {
        return fetch('https://mgmt-test.forum360.co/api/PA_Event/SendReviewRate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer -1leljERr74J_xVJlYOBVgnlwBcsXpfobmY8VW6Pvp-gFpzsDFsXQpJ3fSBX3k_tVZVLvwkE--Bd9wi9gLzI2tRsPxSqrM5zSP8IdN01j8m4-QSmhJG_CGV93z34ATgHQemf4FiiVh2LsAs6VdxOqVJKbb6t0MIyXRdd8js-WPEemNftAtXGLS22KmawdbvT6P3GBCrFwoghEnWmto7Tuaoj2hF6v4G9QjgmPavEYLvQzMvCQdTv0YRGtuUzmWlbv1TMsKOPGlVgKspIKwbSiz_DcatM7ph-6YNjSfAGlR-rIIrfc73j8y5wnkJQ0koBR1ZLhl5D6kqzcVrMxUUVhXfKXIfm6MxHYaKW4HQk6Kumhry5Ijrdoab05yXo5qufAi8gews5UBrrGkYMhaZYt9cUWdGO7YOgwvmFA38-iUXJXCqgzJUdPLSHZgxyO8g19yhFdHvVi07dTRwyyuY1_Jy9vNjhA5tP0pWSO1lKVbQ',
            },
            body: JSON.stringify({
                SessionId: '2560'
            })
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => {
                console.error(error);
                return [];
            });
    }

    function sendtech() {
        return fetch('https://mgmt-test.forum360.co/api/PA_Event/SendTechnicalMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer -1leljERr74J_xVJlYOBVgnlwBcsXpfobmY8VW6Pvp-gFpzsDFsXQpJ3fSBX3k_tVZVLvwkE--Bd9wi9gLzI2tRsPxSqrM5zSP8IdN01j8m4-QSmhJG_CGV93z34ATgHQemf4FiiVh2LsAs6VdxOqVJKbb6t0MIyXRdd8js-WPEemNftAtXGLS22KmawdbvT6P3GBCrFwoghEnWmto7Tuaoj2hF6v4G9QjgmPavEYLvQzMvCQdTv0YRGtuUzmWlbv1TMsKOPGlVgKspIKwbSiz_DcatM7ph-6YNjSfAGlR-rIIrfc73j8y5wnkJQ0koBR1ZLhl5D6kqzcVrMxUUVhXfKXIfm6MxHYaKW4HQk6Kumhry5Ijrdoab05yXo5qufAi8gews5UBrrGkYMhaZYt9cUWdGO7YOgwvmFA38-iUXJXCqgzJUdPLSHZgxyO8g19yhFdHvVi07dTRwyyuY1_Jy9vNjhA5tP0pWSO1lKVbQ',
            },
            body: JSON.stringify({
                SessionId: '2560'
            })
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => {
                console.error(error);
                return [];
            });
    }

    function senddelay() {
        return fetch('https://mgmt-test.forum360.co/api/PA_Event/MeetingDelayNotify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer -1leljERr74J_xVJlYOBVgnlwBcsXpfobmY8VW6Pvp-gFpzsDFsXQpJ3fSBX3k_tVZVLvwkE--Bd9wi9gLzI2tRsPxSqrM5zSP8IdN01j8m4-QSmhJG_CGV93z34ATgHQemf4FiiVh2LsAs6VdxOqVJKbb6t0MIyXRdd8js-WPEemNftAtXGLS22KmawdbvT6P3GBCrFwoghEnWmto7Tuaoj2hF6v4G9QjgmPavEYLvQzMvCQdTv0YRGtuUzmWlbv1TMsKOPGlVgKspIKwbSiz_DcatM7ph-6YNjSfAGlR-rIIrfc73j8y5wnkJQ0koBR1ZLhl5D6kqzcVrMxUUVhXfKXIfm6MxHYaKW4HQk6Kumhry5Ijrdoab05yXo5qufAi8gews5UBrrGkYMhaZYt9cUWdGO7YOgwvmFA38-iUXJXCqgzJUdPLSHZgxyO8g19yhFdHvVi07dTRwyyuY1_Jy9vNjhA5tP0pWSO1lKVbQ',
            },
            body: JSON.stringify({
                SessionId: '2560'
            })
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => {
                console.error(error);
                return [];
            });
    }

    function handleQuickMessageSelect(event) {
        const selectedMessage = event.target.value;
        setSelectedQuickMessage(selectedMessage);
        if (selectedMessage === "welcome") {
            setSubject("Welcome to our event");
            setMessage("Thank you for joining us!");
            sendwelcome()
        } else if (selectedMessage === "rate") {
            setSubject("Rate & Review Request");
            setMessage("We would appreciate your feedback. Please rate and review our event.");
            sendrate()
        } else if (selectedMessage === "tech") {
            setSubject("Technical Issues");
            setMessage("We apologize for the technical difficulties you experienced. Our team is working on resolving them.");
            sendtech()
        } else if (selectedMessage === "delay") {
            setSubject("Meeting Delay Notification");
            setMessage("Due to unforeseen circumstances, the meeting has been delayed. We apologize for any inconvenience caused.");
            senddelay()
        } else {
            setSubject("");
            setMessage("");
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
                        <button
                            type="button"
                            name="feedback"
                            onClick={handleFeedbackClick}
                            className="button"
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
                <div className="body">
                    <h3 className="mh3">Event Messaging</h3>
                    {/* <div className="container" style={{ marginTop: "-10px" }}>
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
                    </div> */}
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
                                <select
                                    value={selectedQuickMessage}
                                    onChange={handleQuickMessageSelect}
                                    className="quick-message-dropdown"
                                >
                                    <option value="" hidden className="quickmessages">Quick Message</option>
                                    {quickMessageOptions.map((option) => (
                                        <option key={option.value} className="quickmessages" value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
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