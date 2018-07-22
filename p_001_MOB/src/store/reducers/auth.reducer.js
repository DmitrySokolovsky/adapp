import {
    LOG_OUT,
    AUTH
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

        default:
            return state;
    }
}