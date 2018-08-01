import { createStore, applyMiddleware, compose } from 'redux';
import { appReducers } from './reducers';
import authMiddleWare from './middleware/auth.middleware';
// import {} from './reducers'

export const tfStore = createStore(
    appReducers,
    applyMiddleware(
        authMiddleWare
    )
);