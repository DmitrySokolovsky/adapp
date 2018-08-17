import {
    SET_NAVIGATION,
    SET_HOME_NAVIGATION
} from '../actions';

const initialState = {
    state: 'INITIAL',
    navRouter: null,
    homeRouter: null
};

export function initNavReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NAVIGATION:
            return {
                ...state,
                navRouter: action.payload
            }

        case SET_HOME_NAVIGATION:
            return {
                ...state,
                homeRouter: action.payload
            }

        default:
            return state;
    }
}