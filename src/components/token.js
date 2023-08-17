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

export function getRole() {
    return role
}

export function setRole(newrole) {
    role = newrole
}
