import { useEffect, useState } from "react";
import { sessiondetails } from "./data";

let token = null;
let userKey = null;
let role = null;
let sessionid = '2661';
let eventkey = 'B9379841-13D9-4494-9A1D-E1A53AD794FE';

export function setToken(newToken) {
    token = newToken;
}

export function getToken() {
    return token;
}

export function setUserkey(userkey) {
    userKey = userkey;
}

export function getUserkey() {
    return userKey;
}

export function getSessionId() {
    return sessionid
}

export function getEventKey() {
    return eventkey
}

export function getrole() {
    return role
}

export function setRole(newrole) {
    role = newrole
}

export function RoleComponent() {
    // const [session, setSession] = useState([]);
    const userKey = getUserkey();
    const token = getToken();
    let session = null;

    if (token) {
        sessiondetails(token)
            .then(result => {
                session = result;
            });
    }

    function getRole() {
        console.log(session)
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
    return role
}