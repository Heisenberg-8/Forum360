import React, { useState, useEffect } from "react";
import qs from 'qs';
import { getSessionId, getEventKey } from "./token"

const Data = () => {
    const [comments, setComments] = useState([
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
    ]);

    return {
        comments,
    };
};

export function fetchQuestions(token) {
    const eventkey = getEventKey()
    const sessionid = getSessionId()
    return fetch('https://mgmt-test.forum360.co/api/PA_Event/InProgressQuestion/' + eventkey + '/' + sessionid, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then(response => response.json())
        .then(json => json.Payload.Audiences)
        .catch(error => {
            console.error(error);
            return [];
        });
}

export function fetchAgenda(token) {
    const eventkey = getEventKey()
    const sessionid = getSessionId()
    return fetch('https://mgmt-test.forum360.co/api/PA_Event/InProgressQuestion/' + eventkey + '/' + sessionid, {
        headers: {
            Authorization: `Bearer ${token}`, // Set the Authorization header with the provided token
        },
    })
        .then(response => response.json()) // Parse the response as JSON
        .then(json => {
            // Filter the questions based on their QuestionStatus
            const filteredQuestions = json.Payload.Planneds.filter(question => question.QuestionStatus !== 902 && question.QuestionStatus !== 909);
            return filteredQuestions; // Return the filtered questions
        })
        .catch(error => {
            console.error(error); // Log any errors that occurred during the fetch or parsing
            return []; // Return an empty array in case of an error
        });
}


export function fetchAnswered(token) {
    const eventkey = getEventKey()
    const sessionid = getSessionId()
    return fetch('https://mgmt-test.forum360.co/api/PA_Event/InProgressQuestion/' + eventkey + '/' + sessionid, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then(response => response.json())
        .then(json => {
            const filteredQuestions = json.Payload.Planneds.filter(question => question.QuestionStatus == 909 || question.QuestionStatus == 902);
            return filteredQuestions;
        })
        .catch(error => {
            console.error(error);
            return [];
        });
}


export function movetoAgenda(token, questionkey) {
    const sessionid = getSessionId()
    return fetch('https://mgmt-test.forum360.co/api/PA_Event/PlanQuestion', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            SessionId: `${sessionid}`,
            IsMoveBackToInComing: false,
            Position: '1',
            QuestionKey: `${questionkey}`,
        }),
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => {
            console.error(error);
            return [];
        });
}

export function movetoAnswered(token, questionid) {
    const eventkey = getEventKey()
    const sessionid = getSessionId()
    return fetch('https://mgmt-test.forum360.co/api/Question/LiveAnswer', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            SpeakerId: '0',
            QuestionStatus: '902',
            EventKey: `${eventkey}`,
            QuestionId: `${questionid}`,
            SessionId: `${sessionid}`
        }),
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => {
            console.error(error);
            return [];
        });
}

export function movetoirp(token, questionid) {
    const eventkey = getEventKey()
    const sessionid = getSessionId()
    return fetch('https://mgmt-test.forum360.co/api/Question/LiveAnswer', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            SpeakerId: '0',
            QuestionStatus: '909',
            EventKey: `${eventkey}`,
            QuestionId: `${questionid}`,
            SessionId: `${sessionid}`
        }),
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => {
            console.error(error);
            return [];
        });
}

export function movebacktoAgenda(token, questionid) {
    const eventkey = getEventKey()
    const sessionid = getSessionId()
    return fetch('https://mgmt-test.forum360.co/api/Question/LiveAnswer', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            OrgId: '795D68B3-49A8-4747-BEFD-17ADDCDE0844',
            AppId: '4'
        },
        body: JSON.stringify({
            SpeakerId: '0',
            QuestionStatus: '900',
            EventKey: `${eventkey}`,
            QuestionId: `${questionid}`,
            SessionId: `${sessionid}`
        }),
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => {
            console.error(error);
            return [];
        });
}


export function SubmitComment(token, userKey, message) {
    const eventkey = getEventKey()
    const sessionid = getSessionId()
    return fetch('https://mgmt-test.forum360.co/api/Booking/feedback', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            EventKey: `${eventkey}`,
            SessionId: `${sessionid}`,
            indicator: '0',
            UserKey: `${userKey}`,
            SpeakerUserKey: '0',
            Message: `${message}`
        }),
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => {
            console.error(error);
            return [];
        });
}

export function SubmitQuestion(token, userKey, message) {
    const eventkey = getEventKey()
    const sessionid = getSessionId()
    return fetch('https://mgmt-test.forum360.co/api/Question/AskQuestion', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            EventKey: `${eventkey}`,
            SessionId: `${sessionid}`,
            Question: `${message}`,
            UserKey: `${userKey}`,
            Appid: '4'
        }),
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => {
            console.error(error);
            return [];
        });
}

export function SubmitReview(token, userKey, message) {
    const eventkey = getEventKey()
    const sessionid = getSessionId()
    return fetch('https://mgmt-test.forum360.co/api/User/ReviewRate', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            EventKey: `${eventkey}`,
            SessionId: `${sessionid}`,
            Rating: "5",
            Comment: `${message}`,
            SpeakerUserKey: '0',
            ReqUserKey: `${userKey}`
        }),
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => {
            console.error(error);
            return [];
        });
}

export function SubmitThumbsUp(token, userKey) {
    const eventkey = getEventKey()
    const sessionid = getSessionId()
    return fetch('https://mgmt-test.forum360.co/api/Booking/feedback', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            EventKey: `${eventkey}`,
            SessionId: `${sessionid}`,
            indicator: '1',
            UserKey: `${userKey}`,
            SpeakerUserKey: '0',
        }),
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => {
            console.error(error);
            return [];
        });
}

export function SubmitThumbsDown(token, userKey) {
    const eventkey = getEventKey()
    const sessionid = getSessionId()
    return fetch('https://mgmt-test.forum360.co/api/Booking/feedback', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            EventKey: `${eventkey}`,
            SessionId: `${sessionid}`,
            indicator: '2',
            UserKey: `${userKey}`,
            SpeakerUserKey: '0',
        }),
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => {
            console.error(error);
            return [];
        });
}

export function generatetoken() {
    return fetch('https://mgmt-test.forum360.co/api/Token', {
        method: 'POST',
        headers: {
            'OrgId': '795D68B3-49A8-4747-BEFD-17ADDCDE0844',
            'Appid': '4'
        },
        body: qs.stringify({
            username: 'gaurav.goyal@veersatech.com',
            password: 'Gauravgoyal$2',
            grant_type: 'password'
        })
    })
        .then(response => response.json())
        .then(json => json)
        .catch(error => {
            console.error('Error:', error);
        });
}

export function getproductlinks(token) {
    return fetch('https://mgmt-test.forum360.co/api/SalesMeetingNotes/OrgProductSetupLinks/3eeac22c-0f14-4ffb-90eb-899a08e95e5e', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then(response => response.json())
        .then(json => json.Payload)
        .catch(error => {
            console.error(error);
            return [];
        });
}

export function submitfulfilment(token, userKey, pathname) {
    const sessionid = getSessionId()
    return fetch('https://mgmt-test.forum360.co/api/EventAnalytic/HitVisitedFulfilment', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            SessionId: `${sessionid}`,
            ReqUserKey: `${userKey}`,
            Pathname: `${pathname}`,
            EventUrl: null
        }),
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => {
            console.error(error);
            return [];
        });
}

export function sharemeetingdetails(token, userKey, toall, ReqUserKey) {
    const sessionid = getSessionId()
    return fetch('https://mgmt-test.forum360.co/api/EventAnalytic/HitVisitedFulfilment', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            SessionId: `${sessionid}`,
            ReqUserKey: `${ReqUserKey}`,
        }),
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => {
            console.error(error);
            return [];
        });
}


export default Data;
