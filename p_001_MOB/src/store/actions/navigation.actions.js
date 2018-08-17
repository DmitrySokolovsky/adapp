import { 
    SET_NAVIGATION, 
    SET_HOME_NAVIGATION
} from './navigation.types';

export function setNavigation(payload) {
    return {
        type: SET_NAVIGATION,
        payload
    }
}

export function setHomeNavigation(payload) {
    return {
        type: SET_HOME_NAVIGATION,
        payload
    }
}