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

export function generatetoken(username, password) {
    return fetch('https://mgmt-test.forum360.co/api/Token', {
        method: 'POST',
        headers: {
            'OrgId': '795D68B3-49A8-4747-BEFD-17ADDCDE0844',
            'Appid': '4'
        },
        body: qs.stringify({
            username: `${username}`,
            password: `${password}`,
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
            'OrgKey': '795D68B3-49A8-4747-BEFD-17ADDCDE0844',
            'AppId': '6',
        },
        body: JSON.stringify({
            SessionId: `${sessionid}`,
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
    var myHeaders = new Headers();
    myHeaders.append("OrgKey", "795D68B3-49A8-4747-BEFD-17ADDCDE0844");
    myHeaders.append("AppId", "5");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", ".AspNet.Cookies=_mlJQvsY1W6uvMJ8ioX-fj1SlGl9WvxcksP3PV_34KJ6dekxayhLWKraY-lRdDWA867hgSBZWP96ocPe6ugaDYYw-sC7J5Dq8ugMk2LQcRNoFHyz2bFpT4S3k9MxcRgZeSrETEskPzr0sVgqXYNbYu5MQ7rOlhsHWrMA6jMmGPw98QC-elJRUkl9WJzQq3J9ElmqYdjxddGEDv0vp3Ab7nehhbpjjjjy4Z8VJxpKgdFs1VgLQmjzlLUfuC3uYssPoTnxbwOZcGdHkhsPldF5etKQiXAY_oRQXeZCZbWFfOU0EM-DNaBmnFbzRsZ7sCCFL8MD35eftydo_epW1ZW7YoJV9mD-LhfMVIwUeZyNhZJ1fVdiKmyrEI3DdRFmA9gHArXz0KOv0Y6q74lnzQzb4Q");

    var urlencoded = new URLSearchParams();
    urlencoded.append("AllIRMangers", `${toall}`);
    urlencoded.append("CoHostUserKey", `${userKey}`);
    // urlencoded.append("MeetingPurpose", "null");
    urlencoded.append("OrgName", null);
    urlencoded.append("ReqUserKey", `${ReqUserKey}`);
    // urlencoded.append("RequestedDate", null);
    urlencoded.append("SessionId", `${sessionid}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };
    return fetch("https://mgmt-test.forum360.co/api/Email/GenerateShareMeetingDetailEmail", requestOptions)
        .then(response => response.text())
        .catch(error => console.log('error', error));
}

export function sendfollowupmail(token, userkey, purpose, date, requserkey) {
    const sessionid = getSessionId()
    var myHeaders = new Headers();
    myHeaders.append("OrgKey", "795D68B3-49A8-4747-BEFD-17ADDCDE0844");
    myHeaders.append("UserKey", `${userkey}`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", ".AspNet.Cookies=L8_uaudPC8Yf5vLNFf2EsKGNUyPZdxIyvhizsPZ61h_2qkYJCCulm-OBlVE9CixMqHf1lwfiybToDxfwwTeyKmatxUXKGTcp19cqNLj8PdOBxWggkVyh0zMFR7dFfmG9iKkS2UPdHkLF4vA_ujHepzviUCFlCQBod3uva94gWpmDbRRLGuZCdhBY5g8juwesvucWQOzMRxpoUT91udLTM6twYXHR_YFwi_O2eTTasgFkL-R5DRT7WzxDYmUuVya1ChZ-nXsAWNp_5Se2Fkk7gYoNCTyasmAkYnfiwlg8CPnC8oB032MOnjRjqfgFN4ixWNDH1w_s_aY5Ht-M-QY4siZaLaAMkQwrQhyjO0v2wIVvXGebdCE4OMoKYbOztKhP");

    var urlencoded = new URLSearchParams();
    urlencoded.append("AllIRMangers", "false");
    urlencoded.append("CoHostUserKey", `${userkey}`);
    urlencoded.append("MeetingPurpose", `${purpose}`);
    urlencoded.append("OrgName", "Veersa Tech");
    urlencoded.append("ReqUserKey", `${requserkey}`);
    urlencoded.append("RequestedDate", `${date}`);
    urlencoded.append("SessionId", `${sessionid}`);
    urlencoded.append("userKey", `${userkey}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    return fetch("https://mgmt-test.forum360.co/api/Email/GenerateMeetingReqEmail", requestOptions)
        .then(response => response.text())
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

export function getmetricanalytics(token) {
    const eventkey = getEventKey()
    const sessionid = getSessionId()
    return fetch('https://mgmt-test.forum360.co/api/EventAnalytic/MetricReport', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'OrgKey': '795D68B3-49A8-4747-BEFD-17ADDCDE0844',
            'AppId': '5',
        },
        body: JSON.stringify({
            SessionId: `${sessionid}`,
            EventKey: `${eventkey}`
        }),
    })
        .then(response => response.json())
        .then(json => json.Payload)
        .catch(error => {
            console.error(error);
            return [];
        });
}

export function getcomments(token) {
    const eventkey = getEventKey();
    const sessionid = getSessionId();
    return fetch('https://mgmt-test.forum360.co/api/EventAnalytic/GetCommentData', {
        method: 'post',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'OrgKey': '795D68B3-49A8-4747-BEFD-17ADDCDE0844',
        },
        body: JSON.stringify({
            SessionId: sessionid,
            EventKey: eventkey
        })
    })
        .then(response => response.json())
        .then(json => json.Payload.GetCommentDetail)
        .catch(error => {
            console.error(error);
            return [];
        });
}

export async function sessiondetails(token, sessionid) {
    return fetch('https://mgmt-test.forum360.co/api/Session/Detail/' + sessionid, {
        method: 'get',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(json => json.Payload);
}


export async function RoleComponent(token, userKey, sessionid) {
    const session = await sessiondetails(token, sessionid);

    function getRole() {
        if (session.DProducer.UserKey === userKey) {
            return 'host';
        }

        if (session.CoHosts !== undefined) {
            for (const cohost of session.CoHosts) {
                if (cohost.UserKey === userKey) {
                    return 'cohost';
                }
            }
        }

        if (session.Speaker.UserKey === userKey) {
            return 'cohost';
        }
        return 'moderator';
    }

    const role = getRole();
    return role;
}


export function getsavings(token) {
    const eventkey = getEventKey();
    const sessionid = getSessionId();
    return fetch('https://mgmt-test.forum360.co/api/EventAnalytic/metric', {
        method: 'post',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'OrgKey': '795D68B3-49A8-4747-BEFD-17ADDCDE0844',
        },
        body: JSON.stringify({
            SessionId: sessionid,
            EventKey: eventkey
        })
    })
        .then(response => response.json())
        .then(json => json.Payload.CostofSalesSavings)
        .catch(error => {
            console.error(error);
            return [];
        });
}

export function gettotalquestions(token) {
    const eventkey = getEventKey();
    const sessionid = getSessionId();
    return fetch('https://mgmt-test.forum360.co/api/EventAnalytic/metric', {
        method: 'post',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'OrgKey': '795D68B3-49A8-4747-BEFD-17ADDCDE0844',
        },
        body: JSON.stringify({
            SessionId: sessionid,
            EventKey: eventkey
        })
    })
        .then(response => response.json())
        .then(json => json.Payload.EventQA)
        .catch(error => {
            console.error(error);
            return [];
        });
}

export function changeOrder(token, questionOrder) {
    const eventkey = getEventKey();
    const sessionid = getSessionId();
    return fetch('https://mgmt-test.forum360.co/api/IR_Event/MeetingSetting', {
        method: 'post',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'OrgId': '795D68B3-49A8-4747-BEFD-17ADDCDE0844'
        },
        body: JSON.stringify({
            EventKey: eventkey,
            MeetingQuestions: [
                {
                    "SessionId": sessionid,
                    "QuestionIds": `${questionOrder}`
                }]
        })
    })
        .then(response => response.json())
        .then(json => json)
        .catch(error => {
            console.error(error);
            return [];
        });
}

export function getsentiment(token) {
    const sessionid = getSessionId();
    return fetch('https://carboncal.azurewebsites.net/api/sentiments?SessionID=' + sessionid + "&Interval=1", {
        method: 'get'
    })
        .then(response => response.json())
        .then(json => json)
        .catch(error => {
            console.error(error);
            return [];
        });
}

export default Data;
