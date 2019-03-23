
import { GET_USER_SUCCESS, LOG_OUT, GET_USER_ERROR } from '../actions';

const initialState = {
    state: 'INITIAL',
    user: {
        name: '',
        id: 0
    },
    userError: false
};

export function userReducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload
            };

        case GET_USER_ERROR: 
            return {
                ...state,
                userError: true
            };

        case LOG_OUT: 
            return {
                ...state,
                user: null
            };

        default: 
            return state;
    }
}