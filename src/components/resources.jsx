import React, { useState, useEffect } from "react";
import Message from "./Message.jsx";
import Analytics from "./Analytics/Analytics.jsx"
import Feedback from "./questions.jsx";
import { SubmitComment, SubmitQuestion, SubmitReview, SubmitThumbsDown, SubmitThumbsUp, getproductlinks, submitfulfilment, getUsers, sharemeetingdetails, sendfollowupmail } from "./data.jsx";
import { getToken, getUserkey } from "./token.js";
import './resources.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';
import { format } from 'date-fns';
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
import citiesdata from './assets/cities.json';
import { ColorRing } from "react-loader-spinner";

function Resources() {
  const token = getToken();
  const userkey = getUserkey();
  const [currentScreen, setCurrentScreen] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [commentInput, setCommentInput] = useState("");
  const [questionInput, setQuestionInput] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [links, setLinks] = useState([]);
  const [fulfilment1, setFulfilment1] = useState([]);
  const [fulfilment2, setFulfilment2] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [fulfilmentuser, setFulfilmentuser] = useState([]);
  const [sharemeetinguser, setSharemeetinguser] = useState([]);
  const [purposeofmeeting, setPurposeofmeeting] = useState([]);
  const [purposeofmeetingDD, setPurposeofmeetingDD] = useState([]);
  const [fulfilmentuserDD, setFulfilmentuserDD] = useState([]);
  const [sharemeetinguserDD, setSharemeetinguserDD] = useState([]);
  const [searchPlaceholder, setSearchPlaceholder] = useState("Search for name");
  const [toall, setToAll] = useState(false);

  const quickMessageOptions = [
    { value: "InvestorCenter", label: "Investor Center" },
    { value: "FundPerformance", label: "Fund Performance" },
    { value: "Announcements", label: "Announcements" },
    { value: "ResearchProviders", label: "Research Providers" },
    { value: "ProductSpecifications", label: "Product Specifications (eg PDS, IM)" },
    { value: "ProductInformationPage", label: "Product Information Page" },
  ];

  const quickMessageOptions1 = [
    { value: "ProductInformationPage", label: "Direct to product issuer" },
    { value: "ProductInformationPage", label: "Via a specialist intermediary" },
    { value: "ProductInformationPage", label: "Via a marketplace or investment platform" },
  ];

  const purpose = [
    { value: "Select meeting alternatives", label: "Select meeting alternatives" },
    { value: "Prospecting", label: "Prospecting" },
    { value: "3", label: "Qualification" },
    { value: "Qualification", label: "C-level" },
    { value: "Product Team Insights", label: "Product Team Insights" },
    { value: "Account Review", label: "Account Review" },
    { value: "Demonstration", label: "Demonstration" },
    { value: "Training", label: "Training" },
    { value: "Product Customization", label: "Product Customization" },
    { value: "Negotiating Terms", label: "Negotiating Terms" },
    { value: "Procurement", label: "Procurement" },
    { value: "Compliance", label: "Compliance" }
  ]

  const cities = citiesdata.map(item => ({
    value: item.id,
    label: `${item.name}, ${item.state_name}, ${item.country_name}`,
  }));

  const handleDateChange = (date) => {
    setSelectedDate(date);
    date.setHours(0, 0, 0, 0);
    setSelectedDate(date);
  };

  useEffect(() => {
    getproductlinks(token)
      .then((questionsData) => {
        setLinks(questionsData);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getUsers(token)
      .then((questionsData) => {
        setUsersData(questionsData);
        setLoading(false);
      });
  }, []);

  const users = usersData.map((user) => ({
    value: user.UserKey,
    label: user.UserName,
  }));

  const handleCheckboxChange = (event) => {
    setToAll(event.target.checked);
  };

  async function handlefulfilment1select(selectedOption) {
    const selectedMessage = selectedOption.label;
    setFulfilment1(selectedOption);
    await submitfulfilment(token, userkey, selectedMessage)
    handleLinkButtonClick(links[selectedMessage])
  }

  async function handlefulfilment2select(selectedOption) {
    const selectedMessage = selectedOption.value;
    setFulfilment2(selectedOption);
    await submitfulfilment(token, userkey, selectedMessage)
    handleLinkButtonClick(links[selectedMessage])
  }

  function fuflilmentsendmail() {
    const formattedDate = selectedDate ? format(selectedDate, 'dd/MM/yyyy') : null;

    sendfollowupmail(token, userkey, purposeofmeeting, formattedDate, fulfilmentuser)
    setPurposeofmeetingDD(null);
    setSelectedDate(null);
    setFulfilmentuserDD(null);
  }

  function handlepurposeselect(selectedOption) {
    setPurposeofmeeting(selectedOption.label)
    setPurposeofmeetingDD(selectedOption)

  }

  function handlefulfilmentuserselect(selectedOption) {
    setFulfilmentuser(selectedOption.value)
    setFulfilmentuserDD(selectedOption)
  }

  function handlesharemeetinguserselect(selectedOption) {
    setSharemeetinguser(selectedOption.label)
    setSearchPlaceholder(selectedOption)
  }

  async function handlesharemeetingsend() {
    await sharemeetingdetails(token, userkey, toall, sharemeetinguser)
    setSearchPlaceholder("Search for name");
  }


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
    window.open(`${linkUrl}`, '_blank');
  }

  function handleSubmitComment(message) {
    SubmitComment(token, userkey, message)
    setCommentInput("");
  }

  function handleSubmitQuestion(message) {
    SubmitQuestion(token, userkey, message)
    setQuestionInput("");
  }

  function handleSubmitReview(message) {
    SubmitReview(token, userkey, message)
    setReviewInput("");
  }

  function handleAnalyticsClick() {
    setCurrentScreen("analytics");
  }

  if (currentScreen === "analytics") {
    return <Analytics />
  }



  if (currentScreen === "messaging") {
    return <Message />;
  }

  if (currentScreen === "feedback") {
    return <Feedback />;
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
      <div className="mainbuttons">
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
          <button type="button" name="analytics" className="button" onClick={handleAnalyticsClick}>
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
            <span className="button-text" >
              Resources
            </span>
          </button>
        </div>
      </div>

      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80%", marginTop: "0%" }}>
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
        <div>

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
                  onChange={(x) => setCommentInput(x.target.value)}
                  style={{ width: '85%' }} />
                <button
                  className="tick-button"
                  onClick={() => {
                    if (commentInput.trim() !== '') {
                      handleSubmitComment(commentInput);
                    }
                  }}
                >
                  <img src={require("./assets/tick.png")} className="tick-img" />
                </button>
              </div>
              <div className="labels">Question</div>
              <div className="typeable">
                <input
                  className="input"
                  placeholder="Start typing..."
                  value={questionInput}
                  onChange={(x) => setQuestionInput(x.target.value)}
                  style={{ width: '85%' }} />
                <button className="tick-button" onClick={() => handleSubmitQuestion(questionInput)} >
                  <img src={require("./assets/tick.png")} className="tick-img" />
                </button>
              </div>
              <div className="labels">Review</div>
              <div className="typeable">
                <input
                  className="input"
                  placeholder="Start typing..."
                  value={reviewInput}
                  onChange={(x) => setReviewInput(x.target.value)}
                  style={{ width: '85%' }} />
                <button className="tick-button" onClick={() => handleSubmitReview(reviewInput)} >
                  <img src={require("./assets/tick.png")} className="tick-img" />
                </button>
              </div>
              <div className="d-flex justify-content-space-between like">
                <btn className="tu" onClick={SubmitThumbsUp}>
                  <img src={thumbdislike} />
                </btn>
                <btn className="td" onClick={SubmitThumbsDown}>
                  <img src={thumblike} />
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
              <div className="message-dropdown-container-res" style={{ width: '100%' }}>
                <Select
                  options={users}
                  placeholder="Filter attendee name..."
                  isSearchable={false}
                  styles={customStyles}
                  classNamePrefix="custom-select"
                />
              </div>
              <div className="attendee" style={{ marginTop: "20px" }}>
                <div style={{ color: "white" }}>City Name </div>
                <div className="message-dropdown-container-res" style={{ width: '100%' }}>
                  <Select
                    options={cities}
                    placeholder="Filter city name..."
                    isSearchable={false}
                    styles={customStyles}
                    classNamePrefix="custom-select"
                  />
                </div>
              </div>
            </div>
            <div className="userlist">
              <div className="user-info">
                <div className="d-flex">
                  <img src={user1} className="avatar" />
                  <div className="username">Zain </div>
                </div>
                <div className="place" style={{ marginLeft: "27px" }}>
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
                  onChange={handlefulfilment1select}
                  value={fulfilment1}
                  placeholder="Quick Message"
                  isSearchable={false}
                  styles={customStyles}
                  classNamePrefix="custom-select"
                />
              </div>
            </div>
            <div className="question-form">
              <div>
                Would you like a follow up meeting with another product expert?If so, with whom?
              </div>
              <Select
                options={users}
                placeholder="Search for name"
                isSearchable={true}
                styles={customStyles}
                classNamePrefix="custom-select"
                value={fulfilmentuserDD}
                onChange={handlefulfilmentuserselect}
              />
              <div className="message-dropdown-container-res" style={{ width: '100%' }}>
                <Select
                  options={purpose}
                  onChange={handlepurposeselect}
                  value={purposeofmeetingDD}
                  placeholder="Purpose of the meeting"
                  isSearchable={false}
                  styles={customStyles}
                  classNamePrefix="custom-select"
                />
              </div>
              <div className="datepick" >

                <DatePicker
                  className="custom-datepicker"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  placeholderText="Select Date"
                  isClearable
                  dateFormat="dd/MM/yyyy"
                  showTimeSelect={false}
                />
              </div>

              <button
                className="tick-button"
                style={{ position: "relative", marginTop: "10px", marginLeft: "185px" }}
                onClick={fuflilmentsendmail}
              >
                <img src={require("./assets/tick.png")} className="tick-img" />
              </button>
            </div>
            <div className="question-form">
              <div>Should you decide, how will you invest in this product?</div>
              <div className="message-dropdown-container-res" style={{ width: '100%' }}>
                <Select
                  options={quickMessageOptions1}
                  onChange={handlefulfilment2select}
                  value={fulfilment2}
                  placeholder="List fullfilment pathways"
                  isSearchable={false}
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

            <div className="typeable">
              <Select
                options={users}
                placeholder="Search for name"
                isSearchable={true}
                styles={customStyles1}
                classNamePrefix="custom-select"
                value={searchPlaceholder}
                onChange={handlesharemeetinguserselect}
              />

              <button className="tick-button" onClick={() => handlesharemeetingsend()} style={{ position: 'absolute', top: '8px', right: '-20px' }}>
                <img src={require("./assets/tick.png")} className="tick-img" />
              </button>
            </div>

            <div className="d3-flex" style={{ marginTop: "15px" }}>
              <input
                type="checkbox"
                id="team"
                name="team"
                value="all"
                className="check"
                checked={toall}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="team" className="team-members" >
                All Team Members
              </label>
              <br />
            </div>
          </div>

          {/* research */}

          <div className="research">
            <div className="research-head" style={{ fontFamily: "albert" }}>Research Key Links</div>
            <div className="links" style={{ marginTop: "15px" }}>
              <button className="link-button" onClick={() => handleLinkButtonClick(links["InvestorCentre"])}>
                <img className="link-image" src={link} />
                <span className="link-text">Information Center</span>
              </button>

              <button className="link-button" onClick={() => handleLinkButtonClick(links["Announcements"])}>
                <img className="link-image" src={link} />
                <span className="link-text">Announcements</span>
              </button>

              <button className="link-button" onClick={() => handleLinkButtonClick(links["ProductInformationPage"])}>
                <img className="link-image" src={link} />
                <span className="link-text">Product Performence</span>
              </button>

              <button className="link-button" onClick={() => handleLinkButtonClick(links["CompanyWebsite"])}>
                <img className="link-image" src={link} />
                <span className="link-text">Company Website</span>
              </button>

              <button className="link-button" onClick={() => handleLinkButtonClick(links["ResearchProviders"])}>
                <img className="link-image" src={link} />
                <span className="link-text">Research Providers</span>
              </button>

              <button className="link-button" onClick={() => handleLinkButtonClick(links["ProductInformationPage"])}>
                <img className="link-image" src={link} />
                <span className="link-text">Product Providers</span>
              </button>

              <button className="link-button" onClick={() => handleLinkButtonClick(links["ProductSpecifications"])}>
                <img className="link-image" src={link} />
                <span className="link-text">Product Specifications</span>
              </button>

              <button className="link-button" onClick={() => handleLinkButtonClick(links["ProductInformationPage"])}>
                <img className="link-image" src={link} />
                <span className="link-text">Product Information Page</span>
              </button>
            </div>
          </div>
        </div>
      )}


    </div >
  );
}

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#13161b',
    borderBottom: 'solid 0.3px rgba(248, 248, 248, 0.60)',
    borderTop: '#13161b',
    borderLeft: '#13161b',
    borderRight: '#13161b',
    borderRadius: '0px',
    outline: 'none',
  }),
  input: (provided) => ({
    ...provided,
    color: "white",
    readOnly: true,
    outline: 'none',

  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#7C7C7C" : "#3D4553",
    color: state.isSelected ? "white" : "white",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    cursor: "default",
    outline: 'none',

  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#3D4553",
    maxWidth: "200px",
    borderTop: "none",
    cursor: "default",
    outline: 'none',
    overflow: 'hidden',
    '&::-webkit-scrollbar': {
      width: '0',
      height: '0',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent',
    },
  }),

  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "13.948px",
    marginLeft: '-5.2px',
    outline: 'none',

  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#white",
    outline: 'none',

  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    marginRight: '-7px',
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

const customStyles1 = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#13161b',
    borderBottom: 'solid 0.3px rgba(248, 248, 248, 0.60)',
    borderTop: '#13161b',
    borderLeft: '#13161b',
    borderRight: '#13161b',
    borderRadius: '0px',
    outline: 'none',
    width: '200px'
  }),
  input: (provided) => ({
    ...provided,
    color: "white",
    readOnly: true,
    outline: 'none',

  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#7C7C7C" : "#3D4553",
    color: state.isSelected ? "white" : "white",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    cursor: "default",
    outline: 'none',

  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#3D4553",
    maxWidth: "200px",
    borderTop: "none",
    cursor: "default",
    outline: 'none',
    overflow: 'hidden',
    '&::-webkit-scrollbar': {
      width: '0',
      height: '0',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent',
    },
  }),

  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "13.948px",
    marginLeft: '-5.2px',
    outline: 'none',

  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#white",
    outline: 'none',

  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    marginRight: '-7px',
    transition: "transform 0.3s ease",
    color: "#7f807f",
    "&:hover": {
      color: "#7f807f",
    },
    display: 'none'
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

export default Resources;