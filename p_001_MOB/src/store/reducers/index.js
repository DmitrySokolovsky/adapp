import { combineReducers } from 'redux';
import { initNavReducer } from './nav.reducer';
import { initAuthReducer } from './auth.reducer';

export const appReducers = combineReducers({
    // form: formReducer --> import { formReducer } from "./form.reducer";
    nav: initNavReducer,
    auth: initAuthReducer
});