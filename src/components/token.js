let token = null;
let userKey = null;
let sessionid = '2591';
let eventkey = '9B764B89-66B2-4701-9682-3F3D7E8F1347';

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