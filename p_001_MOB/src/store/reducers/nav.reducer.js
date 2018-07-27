import {
    SET_NAVIGATION
} from '../actions';

const initialState = {
    state: 'INITIAL',
    navRouter: null
};

export function initNavReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NAVIGATION:
            return {
                ...state,
                navRouter: action.payload
            }

        default:
            return state;
    }
}