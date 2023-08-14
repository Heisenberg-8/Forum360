import "./CS-TS.css";
import pin from '../assets/pin.svg';
import { getmetricanalytics } from "../data";
import { useEffect, useState } from "react";
import { getToken } from "../token";
import { ColorRing } from "react-loader-spinner";


function FFU() {
  const [totalquestions, setTotalquestions] = useState(0);
  const [rating, setRating] = useState(0);
  const token = getToken()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getmetricanalytics(token)
      .then((analyticsdata) => {
        setTotalquestions(analyticsdata.MeetingQuestionAsk);
        setRating(analyticsdata.MeetingRating)
        setLoading(false);

      });
  }, []);

  return (
    <div >
      <div style={{ display: "flex" }}>
        <div className="smallCard" >
          <div style={{ display: "flex" }}>
            <text className="headingSmallCard">Questions Asked</text>
            <img src={pin} style={{ marginLeft: "7%", marginRight: "3%", marginTop: "-17%" }} />
          </div>
          <div style={{ display: "grid" }}>
            <text style={{ fontFamily: "albert", fontSize: "12px", color: "#b1afaf", marginLeft: "10%" }}>View Feedback</text>
            {loading ? (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px", marginTop: "-25px" }}>
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
              <text style={{ marginTop: "10%", marginLeft: "40%", fontSize: "20px", fontWeight: 700, color: 'white' }}>{totalquestions}</text>

            )}
          </div>
        </div>
        <div className="smallCard" >
          <div style={{ display: "flex" }}>
            <text className="headingSmallCard">Ratings</text>
            <img src={pin} style={{ marginLeft: "25%", marginRight: "3%", marginTop: "0%" }} />
          </div>
          <div style={{ display: "grid" }}>
            <text style={{ fontFamily: "albert", fontSize: "12px", color: "#b1afaf", marginLeft: "10%" }}>View Ratings</text>
            {loading ? (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px", marginTop: "-2px" }}>
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
              <text style={{ marginTop: "28%", marginLeft: "40%", fontSize: "20px", fontWeight: 700, color: 'white' }}>{rating}</text>

            )}
          </div>
        </div>
      </div>
    </div>
  )

}
export default FFU;