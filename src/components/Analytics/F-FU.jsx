import "./CS-TS.css";
import pin from '../assets/pin.svg';


function FFU(){


return(
    <div >
    <div style={{display:"flex"}}>
        <div className="smallCard" >
            <div style={{display:"flex"}}>
              <text className="headingSmallCard">Fulfillment</text>
              <img src={pin} style={{marginLeft:"7%", marginRight:"3%" , marginTop:"0%"}}/>
            </div>
            <div style={{display:"grid"}}>
            <text style={{fontFamily: "albert" , fontSize: "12px",color: "#b1afaf", marginLeft:"10%"}}>"How to invest"</text>
            <text style={{marginTop:"20%",marginLeft:"40%",fontSize:"20px",fontWeight:700,color:'white'}}>34</text>
             </div>
        </div>
        <div className="smallCard" >
        <div style={{display:"flex"}}>
              <text className="headingSmallCard">Follow up</text>
              <img src={pin} style={{marginLeft:"11%", marginRight:"3%" , marginTop:"0%"}}/>
            </div>
            <div style={{display:"grid"}}>
            <text style={{fontFamily: "albert" , fontSize: "12px",color: "#b1afaf", marginLeft:"10%"}}>"Active sales and..."</text>
            <text style={{marginTop:"20%",marginLeft:"40%",fontSize:"20px",fontWeight:700,color:'white'}}>24</text>
             </div>
        </div>
    </div>
    </div>
)

}
export default FFU;