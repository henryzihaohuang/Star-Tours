import { combineReducers } from 'redux';
import gmailAuthTokenReducer from './gmailAuthTokenReducer';
import sessionReducer from './sessionReducer';

const reducers = {
    session: sessionReducer,
    credentialToken: gmailAuthTokenReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;