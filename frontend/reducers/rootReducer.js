import { combineReducers } from 'redux';
import gmailAuthTokenReducer from './sessions/gmailAuthTokenReducer';
import sessionReducer from './sessions/sessionReducer';
import errorsReducer from './errors/errorsReducer'

const reducers = {
    session: sessionReducer,
    credentialToken: gmailAuthTokenReducer,
    errors: errorsReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;