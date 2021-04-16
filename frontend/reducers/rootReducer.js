import { combineReducers } from 'redux';
import gmailAuthTokenReducer from './credentialTokenReducer';
import sessionReducer from './session/session_reducer';

const reducers = {
    session: sessionReducer,
    credentialToken: gmailAuthTokenReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;