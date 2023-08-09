import "./CS-TS.css";
import pin from '../assets/pin.svg';
import { getmetricanalytics } from "../data";
import { useEffect, useState } from "react";
import { getToken } from "../token";

function FFU() {
  const token = getToken()
  const [fulfilment, setFulfilment] = useState(0);
  const [followup, setFollowup] = useState(0);

  useEffect(() => {
    getmetricanalytics(token)
      .then((analyticsdata) => {
        setFulfilment(Math.floor(analyticsdata.MeetingInvest));
        setFollowup(Math.floor(analyticsdata.MeetingAction))
      });
  }, []);

  return (
    <div >
      <div style={{ display: "flex" }}>
        <div className="smallCard" >
          <div style={{ display: "flex" }}>
            <text className="headingSmallCard">Fulfillment</text>
            <img src={pin} style={{ marginLeft: "7%", marginRight: "3%", marginTop: "0%" }} />
          </div>
          <div style={{ display: "grid" }}>
            <text style={{ fontFamily: "albert", fontSize: "12px", color: "#b1afaf", marginLeft: "10%" }}>"How to invest"</text>
            <text style={{ marginTop: "20%", marginLeft: "40%", fontSize: "20px", fontWeight: 700, color: 'white' }}>{fulfilment}</text>
          </div>
        </div>
        <div className="smallCard" >
          <div style={{ display: "flex" }}>
            <text className="headingSmallCard">Follow up</text>
            <img src={pin} style={{ marginLeft: "11%", marginRight: "3%", marginTop: "0%" }} />
          </div>
          <div style={{ display: "grid" }}>
            <text style={{ fontFamily: "albert", fontSize: "12px", color: "#b1afaf", marginLeft: "10%" }}>"Active sales and..."</text>
            <text style={{ marginTop: "20%", marginLeft: "40%", fontSize: "20px", fontWeight: 700, color: 'white' }}>{followup}</text>
          </div>
        </div>
      </div>
    </div>
  )

}
export default FFU;