import { SET_STORAGE } from '../actions';

const initialState = {
    state: 'INITIAL',
    storage: null
}

export function initStorageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STORAGE:
            return {
                ...state,
                storage: action.payload
            }
    
        default:
            return state;
    }
}