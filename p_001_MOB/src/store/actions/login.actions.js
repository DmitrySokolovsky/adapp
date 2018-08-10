import {
    LOG_IN,
    LOG_OUT,
    AUTH
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

export function authUser() {
    return {
        type: AUTH
    }
}
