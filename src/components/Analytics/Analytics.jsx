import Sentiment from "./Sentiment";
import MainBtns from "./mainBtns";
import CSTS from "./CS-TS";
import React, { useState } from "react"; // Import useState
import Message from "../Message.jsx";
import "../App.css";
import Feedback from "../questions.jsx";
import Resources from "../resources.jsx";
import "./mainBtns.css";
import Retention from "./Retention.jsx";
import "./Retention.css"
import FFU from "./F-FU"
import QAR from "./QAR";
import AA from "./ActiveAttendees.jsx";
import FMTAR from "./FMTAR";
import MAV from "./MAV";




function Analytics() {

    const [currentScreen, setCurrentScreen] = useState("");

    function handleMessagingClick() {
        setCurrentScreen("messaging");
    }

    function handleFeedbackClick() {
        setCurrentScreen("feedback");
    }

    function handleResourcesClick() {
        setCurrentScreen("resources");
    }

    if (currentScreen === "resources") {
        return <Resources />;
    }

    if (currentScreen === "messaging") {
        return <Message />;
    }

    if (currentScreen === "feedback") {
        return <Feedback />;
    }
    return (
        <div className="main" style={{display:"grid"}}>
             <div className="mbtn" >
   <div className="tab-background">
<img src={require("../assets/logo.png")} alt="logo" className="logo" />
<h1 className="h1">
    Relate <span className="h2">Tools</span>
</h1>
<img
    src={require("../assets/menu (2).png")}
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
            src={require("../assets/messaging.png")}
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
            src={require("../assets/feedback.png")}
            alt="logo"
            className="message"
        />
        <span className="button-text">Feedback</span>
    </button>
</div>
<div className="buttons1">
    <button type="button" name="analytics" className="button" style={{ backgroundColor: "#232cff", color: "#ffffff", border: "1px solid white", }}>
        <img
            src={require("../assets/WhiteChart.png")}
            alt="logo"
            className="message"
        />
        <span className="button-text">Analytics</span>
    </button>
    <button type="button" name="resources" className="button" onClick={ handleResourcesClick}>

        <img
            src={require("../assets/file.png")}
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
       <CSTS/>
       <div style={{marginTop:"0"}}>
       <Retention />
       </div>
       <FFU/>
       <QAR/>
       <AA/>
       <FMTAR/>
       {/* <MAV/> */}
       </div>
    );
}

export default Analytics;
