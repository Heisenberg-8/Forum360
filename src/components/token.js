let token = null;
let userKey = null;
let sessionid = '2645';
let eventkey = '44472A33-562D-484D-B9B3-4031954AF8DD';

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