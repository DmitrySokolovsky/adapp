import { combineReducers } from 'redux';
import { initNavReducer } from './nav.reducer';
import { initAuthReducer } from './auth.reducer';
import { initStorageReducer } from './storage.reducer';

export const appReducers = combineReducers({
    // form: formReducer --> import { formReducer } from "./form.reducer";
    nav: initNavReducer,
    auth: initAuthReducer,
    storage: initStorageReducer
});