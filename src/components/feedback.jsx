import React, { useState } from "react";
import Tab from "./Tab"; // Import the Tab component

function Feedback() {
    const [currentScreen, setCurrentScreen] = useState("");

    function handleMessagingClick() {
        setCurrentScreen("messaging");
    }

    // Render different screens based on the currentScreen state
    if (currentScreen === "messaging") {
        return <Tab />;
    }

    return (
        <div>
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
                    <button type="button" name="messaging" onClick={handleMessagingClick}>
                        <img
                            src={require("./assets/messaging.png")}
                            alt="logo"
                            className="message"
                        />
                        Messaging
                    </button>
                    <button type="button" name="feedback">
                        <img
                            src={require("./assets/feedback.png")}
                            alt="logo"
                            className="message"
                        />
                        Feedback
                    </button>
                </div>
                <div className="buttons1">
                    <button type="button" name="analytics">
                        <img
                            src={require("./assets/chart.png")}
                            alt="logo"
                            className="message"
                        />
                        Analytics
                    </button>
                    <button type="button" name="resources">
                        <img
                            src={require("./assets/file.png")}
                            alt="logo"
                            className="file"
                        />
                        <span style={{ marginLeft: "10px" }}>Resources</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Feedback;





