
import { GET_CATEGORIES_ERROR, GET_CATEGORIES_SUCCESS } from '../actions';

const initialState = {
    state: 'INITIAL',
    categories: [],
    categoriesError: false
};

export function categoryReducer(state = initialState, action) {
    switch(action.type) {
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload
            };

        case GET_CATEGORIES_ERROR: 
            return {
                ...state,
                categoriesError: true
            };

        default: 
            return state;
    }
}