import { SET_NAVIGATION } from './navigation.types';

export function setNavigation(payload) {
    return {
        type: SET_NAVIGATION,
        payload
    }
}