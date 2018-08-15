import {
    LOG_IN,
    LOG_OUT,
    AUTH,
    SET_USER_TOKEN
} from './login.types';

export function logIn(payload) {
    return {
        type: LOG_IN,
        payload
    }
}

export function logOut(payload) {
    return {
        type: LOG_OUT,
        payload
    }
}

export function authUser(payload) {
    return {
        type: AUTH,
        payload
    }
}

export function setUserToken(payload) {
    return {
        type: SET_USER_TOKEN,
        payload
    }
}
