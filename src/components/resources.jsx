import React, { useState, useEffect } from "react";
import Message from "./Message.jsx";
import Comments from "./comments.jsx";
import Agenda from "./Agenda.jsx";
import Answered from "./Answered.jsx";
import Questions from "./questions.jsx"
import Feedback from "./questions.jsx";
import { fetchQuestions } from "./data.jsx";
import './resources.css';
import ai from './assets/ai.svg';
import addComment from './assets/addComment.svg';
import thumbdislike from './assets/thumbdislike.svg';
import thumblike from './assets/thumblike.svg';
import expand from './assets/expand.svg';
import pin from './assets/pin.svg';
import user1 from './assets/user1.png';
import user2 from './assets/user2.png';
import edit from './assets/edit.png';
import link from './assets/link.svg';
import Select from "react-select";

function Resources() {
  const [currentScreen, setCurrentScreen] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [questionInput, setQuestionInput] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  const [selectedQuickMessage, setSelectedQuickMessage] = useState(null);

  // const [isLoading, setIsLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const [links, setLinks] = useState([
    'Information Center',
    'Announcements',
    'Product Performance',
    'Company Website',
    'Research Providers',
    'Product Providers',
    'Product Specifications',
    'Product Information Page'
  ]);

  const quickMessageOptions = [
    { value: "Investor Center", label: "Investor Center" },
    { value: "Fund Performance", label: "Fund Performance"},
    { value: "Announcements", label: "Announcements" },
    { value: "Research Providers", label: "Research Providers" },
    { value: "Product Specifications (eg PDS, IM)", label: "Product Specifications (eg PDS, IM)"},
    { value: "Product Information page", label: "Product Information page"},
  ];

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function handleMessagingClick() {
    setCurrentScreen("messaging");
  }

  function handleFeedbackClick() {
    setCurrentScreen("feedback");
  }

  function handleLinkButtonClick(linkUrl) {
    window.open('https://veersatech.com/', '_blank');
  }

  function handleSubmitComment() {
    setCommentInput("");
  }

  // if (isLoading) {
  //   return (
  //     <div className="loading-spinner"></div>
  //   );
  // }

  if (currentScreen === "messaging") {
    return <Message />;
  }

  if (currentScreen === "feedback") {
    return <Feedback />;
  }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#13161b',
      borderBottom: 'solid 0.3px rgba(248, 248, 248, 0.60)',
      borderTop:'#13161b',
      borderLeft:'#13161b',
      borderRight:'#13161b',
      borderRadius:'0px',
      outline:'none',
    }),
    input: (provided) => ({
      ...provided,
      color: "white",
      readOnly: true,
      outline:'none',

    }),
    option: (provided, state) => ({
      ...provided,
      // backgroundColor: "#3D4553",

      backgroundColor: state.isFocused ? "#7C7C7C" : "#3D4553"  ,
      color: state.isSelected ? "white" : "white",
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
      cursor: "default",
      outline:'none',

    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#3D4553",
      maxWidth: "200px",
      borderTop: "none",
      cursor: "default",
      outline:'none',
  
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "13.948px",
      marginLeft:'-5.2px',
      outline:'none',

    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#white",
      outline:'none',

    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
      marginRight:'-7px',
      transition: "transform 0.3s ease",
      color: "#7f807f",
      "&:hover": {
        color: "#7f807f",
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#7b7b7b",
      fontSize: "13.948px",
    }),
  
  
  };
  

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
            onClick={handleFeedbackClick}
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
            <input
              className="input"
              placeholder="Start typing..."
              value={commentInput}
              onChange={(x) => setCommentInput(x.target.value)} />
            <button className="tick-button">
              <img src={require("./assets/tick.png")} className="tick-img" onClick={handleSubmitComment} />
            </button>
          </div>
          <div className="labels">Question</div>
          <div className="typeable">
            <input className="input" placeholder="Start typing..." />
            <button className="tick-button">
              <img src={require("./assets/tick.png")} className="tick-img" />
            </button>
          </div>
          <div className="labels">Review</div>
          <div className="typeable">
            <input className="input" placeholder="Start typing..." />
            <button className="tick-button">
              <img src={require("./assets/tick.png")} className="tick-img" />
            </button>
          </div>
          <div className="d-flex justify-content-space-between like">
          <btn className="tu">
            <img src={thumbdislike} />
          </btn>
            <btn className="td">
            <img src={thumblike}/>
            </btn>
          </div>
        </div>
      </div>

      {/* keypoints */}

      <div className={`keypoints ${expanded ? "expandable" : ""}`}>
        <div className="keypoints-head">
          <div className="d1-flex">
            <img src={ai} className="ai" alt="AI" />
            <div className="points" >KeyPoints </div>
            <div onClick={handleExpandClick}>
              <img src={expand} className="expand" />
            </div>
          </div>
        </div>
        <div className="keypoints-text">
          <ul>
            <li>
              Ensuring a well-diversified portfolio to minimize risk-consistent dividend payouts and
              strong growth potential
            </li>
          </ul>
        </div>
      </div>

      {/* transcription */}

      <div className="transcription-container">
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
          <div className="carbon-head">Calculate your Carbon saving</div>
          <div className="carbon-head-icon">
            <img src={expand} />
            <img src={pin} />
          </div>
        </div>
        <div className="cities-head" style={{ marginTop: '10px' }}>Confirm the cities where attendees are joining this meeting </div>

        <div className="count-resources">16,000 lbs</div>
        <div className="details">
          <div className="attendee" style={{ marginTop: "10px" }}>
            <div style={{ color: "white" }}>Attendee Name </div>
            <input className="input" placeholder="Filter attendee name..." />
          </div>
          <div className="attendee" style={{ marginTop: "10px" }}>
            <div style={{ color: "white" }}>City Name </div>
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
              <div className="location">NSW Australia</div>
              <img src={edit} className="edit" />
            </div>
          </div>
          <div className="user-info">
            <div className="d-flex">
              <img src={user2} className="avatar" />
              <div className="username">Madelyn</div>
            </div>
            <div className="place">
              <div className="location">NY USA</div>
              <img src={edit} className="edit" />
            </div>
          </div>
        </div>
      </div>

      {/* fulfilment */}

      <div className="fulfilment">
        <div className="form">Fulfilment</div>

        <div className="question-form">
          <div>Would you like to research the product further?</div>
          <div className="message-dropdown-container-res" style={{ width: '100%' }}>
                <Select
                  options={quickMessageOptions}
                  placeholder="Product Links"
                  isSearchable={false}
                  // value={selectedQuickMessage}
                  // onChange={handleQuickMessageSelect}
                  styles={customStyles}
                  classNamePrefix="custom-select"
                />
              </div>
        </div>
        <div className="question-form">
          <div>
            Would you like a follow up meeting with another product expert?If so, with whom?
          </div>
          <input className="input" placeholder="Search for name" />
        </div>
        <div className="question-form">
          <div>Should you decide, how will you invest in this product?</div>
          <div className="message-dropdown-container-res" style={{ width: '100%' }}>
                <Select
                  options={quickMessageOptions}
                  placeholder="List fullfilment pathways"
                  isSearchable={false}
                  // value={selectedQuickMessage}
                  // onChange={handleQuickMessageSelect}
                  styles={customStyles}
                  classNamePrefix="custom-select"
                />
              </div>
                      </div>
      </div>

      {/* meeting-details */}

      <div className="sharemeeting">
        <div className="share-head">Share Meeting Details</div>

        <div className="team">Individual Team Members</div>

        <input className="input" placeholder="Start typing..." />

        <div className="d3-flex">
          <input type="checkbox" id="team" name="team" value="all" className="check" />
          <label htmlFor="team" className="team-members">
            All Team Members
          </label>
          <br />
        </div>
      </div>

      {/* research */}

      <div className="research">
        <div className="research-head">Research Key Links</div>
        <div className="links">
          {links.length > 0
            ? links.map((val) => {
              return (
                <>
                  <button className="link-button" onClick={handleLinkButtonClick}>
                    <img className="link-image" src={link} />
                    <span className="link-text">{val}</span>
                  </button>
                </>
              );
            })
            : ''}
        </div>
      </div>

    </div>
  );
}

export default Resources;