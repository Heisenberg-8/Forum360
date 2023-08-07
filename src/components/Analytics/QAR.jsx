import "./CS-TS.css";
import pin from '../assets/pin.svg';


function FFU(){


return(
    <div >
    <div style={{display:"flex"}}>
        <div className="smallCard" >
            <div style={{display:"flex"}}>
              <text className="headingSmallCard">Questions Asked</text>
              <img src={pin} style={{marginLeft:"7%", marginRight:"3%" , marginTop:"-17%"}}/>
            </div>
            <div style={{display:"grid"}}>
            <text style={{fontFamily: "albert" , fontSize: "12px",color: "#b1afaf", marginLeft:"10%"}}>View Feedback</text>
            <text style={{marginTop:"10%",marginLeft:"40%",fontSize:"20px",fontWeight:700,color:'white'}}>28</text>
             </div>
        </div>
        <div className="smallCard" >
        <div style={{display:"flex"}}>
              <text className="headingSmallCard">Ratings</text>
              <img src={pin} style={{marginLeft:"25%", marginRight:"3%" , marginTop:"0%"}}/>
            </div>
            <div style={{display:"grid"}}>
            <text style={{fontFamily: "albert" , fontSize: "12px",color: "#b1afaf", marginLeft:"10%"}}>View Ratings</text>
            <text style={{marginTop:"28%",marginLeft:"40%",fontSize:"20px",fontWeight:700,color:'white'}}>24</text>
             </div>
        </div>
    </div>
    </div>
)

}
export default FFU;