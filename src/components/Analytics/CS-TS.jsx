import "./CS-TS.css";
import pin from '../assets/pin.svg';
import { getmetricanalytics } from "../data";
import { useEffect, useState } from "react";
import { getToken } from "../token";


function CSTS() {

  return (
    <div style={{ display: "flex", marginTop: "10px" }}>
      <div className="smallCard" >
        <div style={{ display: "flex" }}>
          <text className="headingSmallCard">Carbon Saved</text>
          <img src={pin} style={{ marginLeft: "10%", marginRight: "3%", marginTop: "-17%" }} />
        </div>
        <div style={{ display: "grid" }}>
          <text style={{ fontFamily: "albert", fontSize: "12px", color: "#b1afaf", marginLeft: "10%" }}>In this meeting</text>
          <text style={{ marginTop: "10%", marginLeft: "12%", fontSize: "20px", fontWeight: 700, color: '#2df09e' }}>16,200 lbs</text>
        </div>
      </div>
      <div className="smallCard" >
        <div style={{ display: "flex" }}>
          <text className="headingSmallCard">Time Saved</text>
          <img src={pin} style={{ marginLeft: "10%", marginRight: "3%", marginTop: "-17%" }} />
        </div>
        <div style={{ display: "grid" }}>
          <text style={{ fontFamily: "albert", fontSize: "12px", color: "#b1afaf", marginLeft: "10%" }}>vs travelling</text>
          <text style={{ marginTop: "10%", marginLeft: "21%", fontSize: "20px", fontWeight: 700, color: 'white' }}>158 hrs</text>
        </div>
      </div>
    </div>
  )

}
export default CSTS;