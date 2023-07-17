import React, { useState } from "react";
import Select from "react-select";
import Feedback from "./questions.jsx";
import "./App.css";

function Message({ token }) {
  const [userName, setUserName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [currentScreen, setCurrentScreen] = useState("tab");
  const [selectedQuickMessage, setSelectedQuickMessage] = useState(null);

  const optionList = [
    { value: "red", label: "Send to all" },
    { value: "green", label: "Bob Vance" },
    { value: "yellow", label: "Michael Scott" },
    { value: "blue", label: "Jim Halpert" },
    { value: "To all", label: "Dwight Shrute" },
  ];

  const quickMessageOptions = [
    { value: "welcome", label: "Welcome", icon: require("./assets/welcome.png") },
    { value: "rate", label: "Rate & Review", icon: require("./assets/info.png") },
    { value: "tech", label: "Technical Issues", icon: require("./assets/sad.png") },
    { value: "delay", label: "Meeting Delay", icon: require("./assets/forward.png") },
    { value: "custom", label: "Custom", icon: require("./assets/welcome.png") },
  ];

  function sendWelcome(token) {
    return fetch('https://mgmt-test.forum360.co/api/PA_Event/SendWelcome', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
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

  function sendRate(token) {
    return fetch('https://mgmt-test.forum360.co/api/PA_Event/SendReviewRate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
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

  function sendTech(token) {
    return fetch('https://mgmt-test.forum360.co/api/PA_Event/SendTechnicalMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
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

  function sendDelay(token) {
    return fetch('https://mgmt-test.forum360.co/api/PA_Event/MeetingDelayNotify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
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

  function handleQuickMessageSelect(selectedOption) {
    const selectedMessage = selectedOption.value;
    setSelectedQuickMessage(selectedOption);
    if (selectedMessage === "welcome") {
      setSubject("Welcome to our event");
      setMessage("Thank you for joining us!");
      sendWelcome(token);
    } else if (selectedMessage === "rate") {
      setSubject("Rate & Review Request");
      setMessage("We would appreciate your feedback. Please rate and review our event.");
      sendRate(token);
    } else if (selectedMessage === "tech") {
      setSubject("Technical Issues");
      setMessage("We apologize for the technical difficulties you experienced. Our team is working on resolving them.");
      sendTech(token);
    } else if (selectedMessage === "delay") {
      setSubject("Meeting Delay Notification");
      setMessage("Due to unforeseen circumstances, the meeting has been delayed. We apologize for any inconvenience caused.");
      sendDelay(token);
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
    return <Feedback token={token} />;
  }



  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#1F1F1F",
      borderRadius: "10px",
      border: "none",
      boxShadow: state.isFocused ? "none" : "none",
    }),
    input: (provided) => ({
      ...provided,
      color: "white",
      readOnly: true,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#7C7C7C" : "#1F1F1F",
      color: state.isSelected ? "white" : "white",
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
      cursor: "default",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#3D4553",
      maxWidth: "200px",
      borderTop: "none",
      cursor: "default",

    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "13.948px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#white",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
      transition: "transform 0.3s ease",
      color: "#7f807f",
      "&:hover": {
        color: "#7f807f",
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),

  };



  const OptionWithImage = ({ innerProps, label, data }) => (
    <div className="ddHover" {...innerProps} style={{ display: 'flex', alignItems: 'center' }}>
      <img src={data.icon} style={{ width: '20px', height: '20px', marginRight: '8px' }} />
      {label}
    </div>
  );


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
              <div className="message-dropdown-container" style={{ width: '155px' }}>
                <Select
                  options={quickMessageOptions}
                  placeholder="Quick Message"
                  isSearchable={false}
                  value={selectedQuickMessage}
                  onChange={handleQuickMessageSelect}
                  styles={customStyles}
                  classNamePrefix="custom-select"
                  components={{ Option: OptionWithImage }}

                />
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

export default Message;