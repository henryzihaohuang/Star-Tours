import { REGISTER_CREDENTIAL_TOKEN, DESTROY_CREDENTIAL_TOKEN } from '../actions/gmailAuthTokenActions';

const gmailAuthTokenReducer = (state = null, action) => {
    switch (action.type) {
      case REGISTER_CREDENTIAL_TOKEN:
        return action.token;
      case DESTROY_CREDENTIAL_TOKEN:
        return null;
      default:
        return state;
    }
};

export default gmailAuthTokenReducer;