import React, { useState, useEffect } from "react";
import qs from 'qs';

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
    return fetch('https://mgmt-test.forum360.co/api/PA_Event/InProgressQuestion/84573623-aa87-402c-b28d-24d1e181ecbe/2560', {
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
    return fetch('https://mgmt-test.forum360.co/api/PA_Event/InProgressQuestion/84573623-aa87-402c-b28d-24d1e181ecbe/2560', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then(response => response.json())
        .then(json => json.Payload.Planneds)
        .catch(error => {
            console.error(error);
            return [];
        });
}

export function movetoAgenda(token, questionkey) {
    return fetch('https://mgmt-test.forum360.co/api//PA_Event/PlanQuestion', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            SessionId: '2560',
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
        .then(json => json.access_token)
        .catch(error => {
            console.error('Error:', error);
        });
}




export default Data;
