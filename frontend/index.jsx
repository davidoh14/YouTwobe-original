import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {

    const root = document.getElementById("root");

    let preloadedState = undefined;

    if (window.currentUser) {
        preloadedState = { 
            session: { 
                id: window.currentUser.id
            }
        };
    }

    const store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.logout = logout;
    window.signup = signup;

    ReactDOM.render(<Root store={store} />, root)
});