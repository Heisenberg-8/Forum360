let token = null;
let userKey = null;
let role = null;
let sessionid = null;
let eventkey = null;

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

export function getRole() {
    return role
}

export function setRole(newrole) {
    role = newrole
}

export function setSessionId(sessionId) {
    sessionid = sessionId
}

export function setEventKey(eventKey) {
    eventkey = eventKey
}