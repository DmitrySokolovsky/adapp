import {
    LOG_OUT,
    AUTH,
    SET_USER_DATA
} from '../actions';

const initialState = {
    state: 'INITIAL',
    userData: null
};

export function initAuthReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                userData: action.payload
            }

        case LOG_OUT: 
            return {
                ...state,
                userData: null
            }

        case SET_USER_DATA:
            return {
                ...state,
                userData: action.payload
            }

        default:
            return state;
    }
}