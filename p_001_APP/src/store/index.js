import { combineReducers, createStore, applyMiddleware } from 'redux';
import { userReducer } from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const rootReducer = combineReducers({
    user: userReducer
});

export const appStore = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);