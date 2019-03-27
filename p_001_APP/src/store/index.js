import { combineReducers, createStore, applyMiddleware } from 'redux';
import { userReducer, categoryReducer } from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const rootReducer = combineReducers({
    user: userReducer,
    categories: categoryReducer
});

export const appStore = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);