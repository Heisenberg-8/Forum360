import "./CS-TS.css";
import pin from '../assets/pin.svg';


function FMTAR() {


  return (
    <div style={{ display: "flex" }}>
      <div className="smallCard" >
        <div style={{ display: "flex" }}>
          <text className="headingSmallCard">Front of Mind Time</text>
          <img src={pin} style={{ marginLeft: "10%", marginRight: "3%", marginTop: "-34%" }} />
        </div>
        <div style={{ display: "grid" }}>
          <text style={{ marginTop: "4%", textAlign:"center", fontSize: "20px", fontWeight: 700, color: 'white' }}>12:31</text>
        </div>
      </div>
      <div className="smallCard" >
        <div style={{ display: "flex" }}>
          <text className="headingSmallCard">Attentive Rates</text>
          <img src={pin} style={{ marginLeft: "10%", marginRight: "3%", marginTop: "-17%" }} />
        </div>
        <div style={{ display: "grid" }}>
          <text style={{ fontFamily: "albert", fontSize: "12px", color: "#b1afaf", marginLeft: "10%" }}>Watching Now</text>
          <text style={{ marginTop: "10%", textAlign:"center", fontSize: "20px", fontWeight: 700, color: 'white' }}>90%</text>
        </div>
      </div>
    </div>
  )

}
export default FMTAR;