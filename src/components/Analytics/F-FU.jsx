import "./CS-TS.css";
import pin from '../assets/pin.svg';
import { getmetricanalytics } from "../data";
import { useEffect, useState } from "react";
import { getToken } from "../token";
import { ColorRing } from "react-loader-spinner";

function FFU() {
  const token = getToken()
  const [fulfilment, setFulfilment] = useState(0);
  const [followup, setFollowup] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getmetricanalytics(token)
      .then((analyticsdata) => {
        setFulfilment(Math.floor(analyticsdata.MeetingInvest));
        setFollowup(Math.floor(analyticsdata.MeetingAction));
        setLoading(false);
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
            {loading ? (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px", marginTop: "-15px" }}>
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
              <text style={{ marginTop: "20%", marginLeft: "40%", fontSize: "20px", fontWeight: 700, color: 'white' }}>{fulfilment}</text>

            )}
          </div>
        </div>
        <div className="smallCard" >
          <div style={{ display: "flex" }}>
            <text className="headingSmallCard">Follow up</text>
            <img src={pin} style={{ marginLeft: "11%", marginRight: "3%", marginTop: "0%" }} />
          </div>
          <div style={{ display: "grid" }}>
            <text style={{ fontFamily: "albert", fontSize: "12px", color: "#b1afaf", marginLeft: "10%" }}>"Active sales and..."</text>
            {loading ? (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px", marginTop: "-15px" }}>
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
              <text style={{ marginTop: "20%", marginLeft: "40%", fontSize: "20px", fontWeight: 700, color: 'white' }}>{followup}</text>

            )}
          </div>
        </div>
      </div>
    </div>
  )

}
export default FFU;