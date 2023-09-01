import React, { useState, useEffect } from "react";
import Select from "react-select";
import Feedback from "./questions.jsx";
import Resources from "./resources.jsx";
import "./App.css";
import { getToken, getSessionId, getUserkey } from "./token";
import { RoleComponent } from "./data.jsx";
import Analytics from "./Analytics/Analytics.jsx"

function Message() {
  const token = getToken();
  const sessionid = getSessionId();
  console.log(sessionid)
  const userkey = getUserkey()
  let role = RoleComponent(token, userkey, sessionid);
  const [userName, setUserName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [currentScreen, setCurrentScreen] = useState("tab");
  const [selectedQuickMessage, setSelectedQuickMessage] = useState(null);
  const [isQuickMessageSelected, setIsQuickMessageSelected] = useState(false);

  const quickMessageOptions = [
    { value: "welcome", label: "Welcome", icon: require("./assets/welcome.png") },
    { value: "rate", label: "Rate & Review", icon: require("./assets/info.png") },
    { value: "tech", label: "Technical Issues", icon: require("./assets/sad.png") },
    { value: "delay", label: "Meeting Delay", icon: require("./assets/forward.png") },
    { value: "custom", label: "Custom", icon: require("./assets/custom.png") },
  ];

  function sendWelcome(token) {
    return fetch('https://mgmt-test.forum360.co/api/PA_Event/SendWelcome', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        SessionId: `${sessionid}`
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
        SessionId: `${sessionid}`
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
        SessionId: `${sessionid}`
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
        SessionId: `${sessionid}`
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
      setSubject("Reminder from [Org Name]: Your Meeting will start soon");
      setMessage(`Hello [First Name],
  
This is a reminder that your meeting with [Presenter Full Name] from [Product Name] is due to start on [Event Date, Start Time, Time Zone].`);
    } else if (selectedMessage === "rate") {
      setSubject("[Org Name] Meeting Follow Up");
      setMessage(`Hello [First Name],
  
How did the meeting go? Click on the link below to share your feedback if you have not done so already.
  
Rate and Review
  
Can we be of further assistance with your enquiries? Please visit us at [Product Link] for more information or contact us at google@google.com.`);
    } else if (selectedMessage === "delay") {
      setSubject("[Org Name] - Attention - [Meeting Name] has been delayed ");
      setMessage(`Hello [First Name],
  
We would like to inform you that [Event Name - Meeting Name] has been delayed. Please kindly wait and we will notify you once the meeting has started. We apologise for any inconvenience this may cause.
  
Kind Regards,
Team [Org Name]`);
    } else if (selectedMessage === "tech") {
      setSubject("[Org Name] Alert: Technical Difficulties");
      setMessage(`We are currently experiencing technical difficulties. We are working to resolve this as quickly as possible and will provide an update shortly.`);
    } else {
      setSubject("");
      setMessage("");
    }
    setIsQuickMessageSelected(selectedMessage !== null);

  }

  function handleSubjectChange(event) {
    setSubject(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSendMessage() {
    if (!isQuickMessageSelected) {
      return;
    }

    if (message.trim() !== "") {
      const newMessage = {
        sender: userName,
        subject: subject,
        content: message,
      };
      setChatMessages([...chatMessages, newMessage]);
      setMessage("");
      setSubject("");
      setSelectedQuickMessage(null);
      setIsQuickMessageSelected(false);

      switch (selectedQuickMessage?.value) {
        case "welcome":
          sendWelcome(token);
          break;
        case "rate":
          sendRate(token);
          break;
        case "tech":
          sendTech(token);
          break;
        case "delay":
          sendDelay(token);
          break;
        default:
          break;
      }
    }
  }


  function handleFeedbackClick() {
    setCurrentScreen("feedback");
  }

  function handleResourcesClick() {
    setCurrentScreen("resources");
  }

  function handleAnalyticsClick() {
    setCurrentScreen("analytics");
  }

  if (currentScreen === "analytics") {
    return <Analytics />
  }

  if (currentScreen === "feedback") {
    return <Feedback />;
  }

  if (currentScreen === "resources") {
    return <Resources />;
  }

  return (
    <div className="main">
      <div className="tab-background">
        <img src={require("./assets/logo.png")} alt="logo" className="logo" />
        <h1 className="h1">
          Relate <span className="h2">Tools</span>
        </h1>

      </div>
      <div>
        <div className="mainbuttons" style={{ display: "flex", marginTop: "25px", flexWrap: "wrap" }}>
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
        <div className="body">
          <h3 className="mh3">Event Messaging</h3>
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
              rows={16}
            />
            <button
              onClick={handleSendMessage}
              className={`send-button ${!isQuickMessageSelected ? 'disabled-button' : ''}`}
              disabled={!isQuickMessageSelected}
            >             Send Message
            </button>

          </div>
        </div>
      </div>
    </div >
  );
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
  singleValue: (provided) => ({
    ...provided,
    color: "#7b7b7b",
    fontSize: "13.948px",
  }),


};

const OptionWithImage = ({ innerProps, label, data }) => (
  <div className="ddHover" {...innerProps} style={{ display: 'flex', alignItems: 'center' }}>
    <img src={data.icon} style={{ width: '20px', height: '20px', marginRight: '8px' }} />
    {label}
  </div>
);

export default Message;