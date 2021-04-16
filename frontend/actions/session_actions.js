import { postSession, postUser, deleteSession } from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser: {
        id: currentUser.id,
        firstName: currentUser.first_name,
        lastName: currentUser.last_name,
        email: currentUser.email,
        password: currentUser.password,
        balance: currentUser.balance
    }
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = errors => {
    return {
            type: RECEIVE_ERRORS,
            errors
    }
};

export const signup = (formUser) => {
    const translatedUser = {
        first_name: formUser.firstName,
        last_name: formUser.lastName,
        email: formUser.email,
        password: formUser.password,
        balance: formUser.balance
    }

    return (dispatch) => {
        return postUser(translatedUser)
            .then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
            (errors) => dispatch(receiveErrors(errors.responseJSON)));
    }
} 


export const login = (formUser) => {
    
    return (dispatch) => {
        return postSession(formUser)
            .then(
                (currentUser)=> dispatch(receiveCurrentUser(currentUser)),(errors) => dispatch(receiveErrors(errors.responseJSON)));
    }
}

export const logout = () => {
    return (dispatch) => {
        return deleteSession()
        .then(() => dispatch(logoutCurrentUser()));
    }
}