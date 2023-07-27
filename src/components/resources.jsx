import React, { useState, useEffect } from "react";
import Message from "./Message.jsx";
import Comments from "./comments.jsx";
import Agenda from "./Agenda.jsx";
import Answered from "./Answered.jsx";
import Questions from "./questions.jsx"
import { fetchQuestions } from "./data.jsx";
import Data from "./data.jsx";
import addComment from './assets/addComment.svg';
import thumbdislike from './assets/thumbdislike.svg';
import thumblike from './assets/thumblike.svg';
import './resources.css';
import ai from './assets/ai.svg';
import expand from './assets/expand.svg';
import pin from './assets/pin.svg';
import user1 from './assets/user1.png';
import user2 from './assets/user2.png';
import edit from './assets/edit.png';



function Resources() {
  const { comments } = Data();
  const [currentScreen, setCurrentScreen] = useState("");
  const [fadeContainerVisible, setFadeContainerVisible] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const commentCount = comments.length;
  
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);}

  useEffect(() => {
    fetchQuestions()
      .then(questionsData => {
        setQuestions(questionsData);
        setIsLoading(false);
      });
  }, []);

  const messageCount = questions.length;

  function handleMessagingClick() {
    setCurrentScreen("messaging");
  }

 
  if (currentScreen === "questions") {
    return <Questions />;
  }

  if (isLoading) {
    return (
      <div className="loading-spinner"></div>
    );
  }

  if (currentScreen === "messaging") {
    return <Message />;
  }

  if (currentScreen === "agenda") {
    return <Agenda />;
  }

  if (currentScreen === "comments") {
    return <Comments />;
  }

  if (currentScreen === "answered") {
    return <Answered />;
  }

  return (
    <div className="main">
      <div className="tab-background">
        <img src={require("./assets/logo.png")} alt="logo" className="logo" />
        <h1 className="h1">
          Relate <span className="h2">Tools</span>
        </h1>
        <img
          src={require("./assets/menu (2).png")}
          alt="logo"
          className="menu"
        />
      </div>
      <div className="">
        <div className="buttons">
          <button
            type="button"
            name="messaging"
            onClick={handleMessagingClick}
            className="button"
          >
            <img
              src={require("./assets/messaging.png")}
              alt="logo"
              className="message"
            />
            <span className="button-text">Messaging</span>
          </button>
          <button
            type="button"
            name="feedback"
            className="button"
          >
            <img
              src={require("./assets/feedback.png")}
              alt="logo"
              className="message"
            />
            <span className="button-text">Feedback</span>
          </button>
        </div>
        <div className="buttons1">
          <button type="button" name="analytics" className="button">
            <img
              src={require("./assets/chart.png")}
              alt="logo"
              className="message"
            />
            <span className="button-text">Analytics</span>
          </button>
          <button type="button" name="resources" className="button" style={{ backgroundColor: "#232cff", color: "#ffffff", border: "1px solid white", }}
>
            <img
              src={require("./assets/whitefile.png")}
              alt="logo"
              className="file"
            />
            <span className="button-text" style={{ marginLeft: "10px" }}>
              Resources
            </span>
          </button>
        </div>
      </div>

{/* CustomerExperienceForm */}

      <div className="customerexperience">
      <div className="d-flex">
        <img src={addComment} style={{ marginTop: "0px" }} />
        <div className="gri">
        <div className="customer">Customer Experience</div>
        <div className="sessionnotes">Enter session notes</div>
</div>
      </div>
      <div className="formdata">
        <div className="labels">Comment</div>

        <div className="typeable">
          <input className="input" placeholder="Start typing..."/>
          <img src ={require ("./assets/tick.png") } className="tickimg" />
        </div>
        <div className="labels">Question</div>
        <div className="typeable">
          <input className="input" placeholder="Start typing..." />
          <img src ={require ("./assets/tick.png") } className="tickimg"/>
        </div>
        <div className="labels">Review</div>
        <div className="typeable">
          <input className="input" placeholder="Start typing..." />
          <img src ={require ("./assets/tick.png") } className="tickimg"/>
        </div>
        <div className="d-flex justify-content-space-between like">
          <img src={thumbdislike} />
          <img src={thumblike} />
        </div>
      </div>
    </div>

    {/* keypoints */}

    <div className={`keypoints ${expanded ? "expandable" : ""}`}>
      <div className="keypoints-head">
        <div className="d1-flex">
          <img src={ai} className="ai" alt="AI"  />
          <div className="points" >KeyPoints </div>
          <div onClick={handleExpandClick}>
          <img src={expand} className="expand"/>
        </div>
        </div>
       
      </div>
      <div>
        <ul>
          <li>
            Ensuring a well-diversified portfolio to minimize risk-consistent dividend payouts and
            strong growth potential
          </li>
        </ul>
      </div>
    </div>

    {/* transcription */}

    <div className="keypoints">
      <div className="script">
        <div className="d2-flex">
          <img src={ai} className="ai" />
          <div className="transcription" style={{ color: "white" }}>Transcription</div>
          <div className="expand1">
        <img src={expand} />
      </div>
        </div>
      </div>
    </div>

    {/* carbon */}

    <div className="carbon">
      <div className="save">
        <img src={expand} style={{marginLeft:'190px'}} />
        <img src={pin} />
      </div>
      <div className="carbon-head">Calculate your Carbon saving</div>
      <div className="cities-head" style={{marginTop:'10px'}}>Confirm the cities where attendees are joining this meeting </div>

      <div className="count">16,000 lbs</div>
      <div className="details">
        <div className="attendee">
          <div style={{color:"white"}}>Attendee Name </div>
          <input className="input" placeholder="Filter attendee name..." />
        </div>
        <div className="attendee">
          <div style={{color:"white"}}>City Name </div>
          <input className="input" placeholder="Filter city name..." />
        </div>
      </div>
      <div className="userlist">
        <div className="user-info">
          <div className="d-flex">
            <img src={user1} className="avatar" />
            <div className="username">Zain Philips</div>
          </div>
          <div className="place">
            <div className="location">Sydney, NSW Australia</div>
            <img src={edit} className="edit"/>
          </div>
        </div>
        <div className="user-info">
          <div className="d-flex">
            <img src={user2} className="avatar" />
            <div className="username">Madelyn Donin</div>
          </div>
          <div className="place">
            <div className="location">New York, NY USA</div>
            <img src={edit} className="edit"/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Resources;
