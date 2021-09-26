import {
    postUser,
    deleteSession,
    postSession
} from '../util/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
};

const logoutUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
};

export const signup = formUser => dispatch => postUser(formUser)
    .then(user => dispatch(receiveUser(user))); 

export const login = formUser => dispatch => postSession(formUser)
    .then(user => dispatch(receiveUser(user)));

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutUser())); 