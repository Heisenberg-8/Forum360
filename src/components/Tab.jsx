import React, { useState, useEffect } from "react";
import { app, teamsCore } from "@microsoft/teams-js";
import MediaQuery from "react-responsive";
import Select from "react-select";
import "./App.css";

function Tab() {
  const [meetingId, setMeetingId] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedOptions, setSelectedOptions] = useState();
  const [subject, setSubject] = useState("");

  useEffect(() => {
    app.initialize().then(() => {
      app.notifySuccess();

      app.getContext().then((context) => {
        setMeetingId(context.meeting.id);
        setUserName(context.user.userPrincipalName);

        if (context.page.frameContext === "sidePanel") {
          teamsCore.registerOnLoadHandler((context) => {
            app.notifySuccess();
          });

          teamsCore.registerBeforeUnloadHandler((readyToUnload) => {
            readyToUnload();
            return true;
          });
        }
      });
    });
  }, []);

  // Array of all options
  const optionList = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
    { value: "white", label: "White" },
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }

  // Function triggered on subject input change
  function handleSubjectChange(event) {
    setSubject(event.target.value);
  }

  return (
    <div>
      <div className="tab-background">
        <img src={require("./assets/logo.png")} alt="logo" className="logo" />
        <h1 className="h1">
          Relate <span className="h2">Tools</span>
        </h1>
        <img src={require("./assets/menu (2).png")} alt="logo" className="menu" />
      </div>
      <div>
        <div className="buttons">
          <button type="button" name="messaging">
            <img src={require("./assets/messaging.png")} alt="logo" className="message" />
            Messaging
          </button>
          <button type="button" name="feedback">
            <img src={require("./assets/feedback.png")} alt="logo" className="message" />
            Feedback
          </button>
        </div>
        <div className="buttons1">
          <button type="button" name="analytics">
            <img src={require("./assets/chart.png")} alt="logo" className="message" />
            Analytics
          </button>
          <button type="button" name="resources">
            <img src={require("./assets/file.png")} alt="logo" className="file" />
            <span style={{ marginLeft: "10px" }}>Resources</span>
          </button>
        </div>
        <h3 className="h3">Event Messaging</h3>
        <div className="container">
          <h3 className="h3">To:</h3>
          <div className="dropdown-container">
            <Select
              options={optionList}
              placeholder="Select color"
              value={selectedOptions}
              onChange={handleSelect}
              isSearchable={true}
              isMulti
              styles={customStyles}
            />
          </div>
        </div>
        <div className="container">
          <h3 className="h3">Subject:</h3>
          <input
            type="text"
            value={subject}
            onChange={handleSubjectChange}
            placeholder="Enter subject"
            className="input-box"
          />
        </div>
      </div>
    </div >
  );
}

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#3f3f3f",
    borderRadius: "10px",
    border: "none",
    boxShadow: state.isFocused ? "0 0 0 2px #7C7C7C" : "none",
  }),
  input: (provided) => ({
    ...provided,
    color: "#0a0e17",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#000000" : "#3f3f3f",
    color: state.isSelected ? "#FFFFFF" : "white",
    fontSize: "16px",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#3f3f3f",
  }),
};

export default Tab;
