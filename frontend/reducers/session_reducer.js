import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session';

const _nullSession = {
    currentUser: null
};

const sessionReducer = (store = _nullSession, action) => {
    Object.freeze(store);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { currentUser: action.currentUser });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        case UPDATE_BALANCE:
            return action.deposit;
        default:
            return store;
    }
};

export default sessionReducer;
