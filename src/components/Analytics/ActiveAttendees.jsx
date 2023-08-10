import React, { useState, useEffect } from "react";
import "./CS-TS.css";
import pin from '../assets/pin.svg';
import { getmetricanalytics } from "../data";
import { getToken } from "../token";

function AA() {
    const token = getToken()
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        getmetricanalytics(token)
            .then((analyticsdata) => {
                setProgress(analyticsdata.MeetingFeedback);
            });
    }, []);


    return (
        <div>
            <div style={{ display: "flex" }}>
                <div className="smallCard" style={{ width: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <text className="headingSmallCard" style={{ marginLeft: "5%", whiteSpace: 'nowrap' }}>Active attendees</text>
                        <img src={pin} style={{ marginLeft: "32%", marginRight: "3%", marginTop: "-3%" }} alt="Pin Icon" />
                    </div>
                    <div style={{ display: "grid" }}>
                        <text style={{ fontFamily: "albert", fontSize: "12px", color: "#b1afaf", marginLeft: "5%" }}>Viewers who are giving feedback, researching, etc</text>
                        <div style={{ display: "grid", alignItems: "center" }}>
                            <text className="headingSmallCard" style={{ marginLeft: '45%', marginTop: "-0%" }}>{progress}%</text>
                            <div style={{ marginLeft: "15%", width: '70%', height: '8px', backgroundColor: '#42424D', marginTop: '3%' }}>
                                <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#232cff' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AA;
