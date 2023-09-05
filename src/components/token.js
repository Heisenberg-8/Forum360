let token = null;
let userKey = null;
let role = null;
let sessionid = null;
let eventkey = null;
let orgid = null;
// let orgid = '795D68B3-49A8-4747-BEFD-17ADDCDE0844'
// const [dataset1Data, setDataset1Data] = useState([]);
// const [dataset2Data, setDataset2Data] = useState([]);

// export function getdataset1

export function setToken(newToken) {
    token = newToken;
}

export function getToken() {
    return token;
}

export function setorgid(orgid) {
    orgid = orgid
}

export function getorgid() {
    return orgid
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