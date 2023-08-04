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
            Authorization: `Bearer ${token}`,
        },
    })
        .then(response => response.json())
        .then(json => {
            const filteredQuestions = json.Payload.Planneds.filter(question => question.QuestionStatus !== 902 && question.QuestionStatus !== 909);
            return filteredQuestions;
        })
        .catch(error => {
            console.error(error);
            return [];
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
            Appid: '5'
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
            username: 'sidak@veersatech.com',
            password: 'Sidak@123',
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
    return fetch('https://mgmt-test.forum360.co/api/EventAnalytic/HitVisitedFulfilment', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'OrgKey': '795D68B3-49A8-4747-BEFD-17ADDCDE0844',
            'AppId': '6',
        },
        body: JSON.stringify({
            SessionId: 2596,
            ReqUserKey: `${userKey}`,
            Pathname: `${pathname}`
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

    // return fetch('https://mgmt-test.forum360.co/api/Email/GenerateShareMeetingDetailEmail', {
    //     method: 'POST',
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //         "Content-Type", "application/x-www-form-urlencoded",
    //         'OrgKey': '795D68B3-49A8-4747-BEFD-17ADDCDE0844',
    //         'AppId': '5',
    //     },
    //     body: JSON.stringify({
    //         SessionId: `${sessionid}`,
    //         ReqUserKey: `${ReqUserKey}`,
    //         AllIRMangers: false,
    //         CoHostUserKey: `${userKey}`,
    //         MeetingPurpose: null,
    //         OrgName: null,
    //         RequestedData: null
    //     }),
    //     redirect: 'follow'
    // })
    //     .then(response => response.json())
    //     .then(result => console.log(result))
    //     .catch(error => {
    //         console.error(error);
    //         return [];
    //     });
    var myHeaders = new Headers();
    myHeaders.append("OrgKey", "795D68B3-49A8-4747-BEFD-17ADDCDE0844");
    myHeaders.append("AppId", "5");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", "Bearer Uavu3EvHaadrFosbpOJEQy_u7usW0fXrXSGKbO4wFqAvrq9mAQOZ4-Ic3Jv8shK5QpAOE5tIxeBZijFrlAE0qzszAf6r5JU8UqKJjcX0giBxBfAwTIqYTGBCGMsb2yRTGlcSagBvOCQFWlW59qSkxOlH4muoPKQ1AHZzfSB63ZE_SJD2ecfEUGaAUvgkpdXSOoej3F4hu_K6HFQP-YqWrwPuQtu1IdicR6raFtqsGtC-4GQct3gBD88uUO0pK-i5fi3ZMZ8ScFGQOl_ide2PZm_EO9p75WcDoTWhX6yAS4CPiL_1-u5-ObLOKTORuRuOpwZOfODMRMf2XHz9kxQYMDef8u_Orw7k-ts3yzPdm4CWxsHTqpmGoTEKmVJyVjGRr0kRZW-RlRN_TgoH0YyOkboX0zS5laG-8P4V0N8EcYJ7eI0KmtGAj8rq9EalxayI-ZUuQKU_sXBmzD27VFh58btitsupE8WQfiNpnD-Dbw8");
    myHeaders.append("Cookie", ".AspNet.Cookies=_mlJQvsY1W6uvMJ8ioX-fj1SlGl9WvxcksP3PV_34KJ6dekxayhLWKraY-lRdDWA867hgSBZWP96ocPe6ugaDYYw-sC7J5Dq8ugMk2LQcRNoFHyz2bFpT4S3k9MxcRgZeSrETEskPzr0sVgqXYNbYu5MQ7rOlhsHWrMA6jMmGPw98QC-elJRUkl9WJzQq3J9ElmqYdjxddGEDv0vp3Ab7nehhbpjjjjy4Z8VJxpKgdFs1VgLQmjzlLUfuC3uYssPoTnxbwOZcGdHkhsPldF5etKQiXAY_oRQXeZCZbWFfOU0EM-DNaBmnFbzRsZ7sCCFL8MD35eftydo_epW1ZW7YoJV9mD-LhfMVIwUeZyNhZJ1fVdiKmyrEI3DdRFmA9gHArXz0KOv0Y6q74lnzQzb4Q");

    var urlencoded = new URLSearchParams();
    urlencoded.append("AllIRMangers", "false");
    urlencoded.append("CoHostUserKey", "456830c3-9e93-4117-9e3e-608be3714020");
    // urlencoded.append("MeetingPurpose", "null");
    urlencoded.append("OrgName", null);
    urlencoded.append("ReqUserKey", "sidak@veersatech.com");
    // urlencoded.append("RequestedDate", null);
    urlencoded.append("SessionId", "2645");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };
    console.log('here')
    return fetch("https://mgmt-test.forum360.co/api/Email/GenerateShareMeetingDetailEmail", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export function getUsers(token) {
    return fetch("https://mgmt-test.forum360.co/api/User/UserByOrg/795d68b3-49a8-4747-befd-17addcde0844/15", {
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


export default Data;
