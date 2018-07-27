import { createStore, applyMiddleware, compose } from 'redux';
import { appReducers } from './reducers';
// import {} from './reducers'

export const tfStore = createStore(
    appReducers
);