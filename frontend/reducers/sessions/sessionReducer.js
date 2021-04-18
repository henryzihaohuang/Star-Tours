import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/sessionActions';

const _nullSession = {
    currentUser: null
};

const sessionReducer = (store = _nullSession, action) => {
    Object.freeze(store);

    debugger;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { currentUser: action.currentUser });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return store;
    }
};

export default sessionReducer;
