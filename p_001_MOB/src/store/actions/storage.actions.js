import { SET_STORAGE } from './';

export function setStorage(payload) {
    return {
        type: SET_STORAGE,
        payload
    };
}