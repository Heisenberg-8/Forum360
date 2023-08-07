import "./Sentiment.css";
import "./CS-TS.css";
import expand from '../assets/expand.svg';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import edit from '../assets/edit.png';
import "./MAV.css"

function MAV() {

return(

 <div className="bigContainer" style={{marginTop:"3%"}}>
    <div style={{display:"flex"}}>
              <text className="headingSmallCard" style={{marginLeft:"6%",whiteSpace: 'nowrap'}}>Most Active Viewers</text>
              <img src={expand} style={{marginLeft:"17%", marginRight:"3%" , marginTop:"3%"}}/>
    </div>
            <div className="userlist" style={{marginLeft:"5%"}}>
          <div className="user-info">
            <div className="d-flex">
              <img src={user1} className="avatar" />
              <div >Zain Philips</div>
              <div style={{ alignItems: "center",backgroundColor:"red"}}>NSW Australia</div>
              <img src={edit} className="edit" />
            </div>
          </div>
          <div className="user-info">
            <div className="d-flex">
              <img src={user2}  />
              <div >Madelyn</div>
              <div  style={{ alignItems: "center",backgroundColor:"red"}}>NY USA</div>
              <img src={edit} />
            </div>
            

          </div>
        </div>

    
 </div>

)
}
export default MAV;