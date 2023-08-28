import "./CS-TS.css";
import pin from '../assets/pin.svg';
import { getsavings } from "../data";
import { useEffect, useState } from "react";
import { getToken } from "../token";
import { ColorRing } from "react-loader-spinner";


function CSTS() {
  const token = getToken()
  const [carbonsave, setCarbonsave] = useState(0);
  const [timesaved, setTimesaved] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getsavings(token)
      .then((analyticsdata) => {
        setCarbonsave(Math.floor(analyticsdata.CarbonSaved));
        setTimesaved(Math.floor(analyticsdata.TransportationTimeSaved));
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ display: "flex", marginTop: "-3" }}>
      <div className="smallCard" >
        <div style={{ display: "flex" }}>
          <text className="headingSmallCard">Carbon Saved</text>
          <img src={pin} style={{ marginLeft: "10%", marginRight: "3%", marginTop: "-17%" }} />
        </div>
        <div style={{ display: "grid" }}>
          <text style={{ fontFamily: "albert", fontSize: "12px", color: "#b1afaf", marginLeft: "10%" }}>In this meeting</text>
          {loading ? (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px", marginTop: "-27px" }}>
                <ColorRing
                  visible={true}
                  height="50"
                  width="50"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={['#232cff', '#232cff', '#232cff', '#232cff', '#232cff']}
                />
              </div>
            ) : (
              <text style={{ marginTop: "10%", textAlign:"center", fontSize: "20px", fontWeight: 700, color: '#2df09e' }}>{carbonsave} lbs</text>

            )}
        </div>
      </div>
      <div className="smallCard" >
        <div style={{ display: "flex" }}>
          <text className="headingSmallCard">Time Saved</text>
          <img src={pin} style={{ marginLeft: "10%", marginRight: "3%", marginTop: "-17%" }} />
        </div>
        <div style={{ display: "grid" }}>
          <text style={{ fontFamily: "albert", fontSize: "12px", color: "#b1afaf", marginLeft: "10%" }}>vs travelling</text>
          {loading ? (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px", marginTop: "-27px" }}>
                <ColorRing
                  visible={true}
                  height="50"
                  width="50"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={['#232cff', '#232cff', '#232cff', '#232cff', '#232cff']}
                />
              </div>
            ) : (
              <text style={{ marginTop: "10%",textAlign:"center", fontSize: "20px", fontWeight: 700, color: 'white' }}>{timesaved} hrs</text>
            )}
        
        </div>
      </div>
    </div>
  )

}
export default CSTS;