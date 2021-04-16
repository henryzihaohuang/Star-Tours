import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, signup, logout, receiveCurrentUser } from './actions/sessionActions';
import * as APISwapiUtil from "./utils/swapiUtil";

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
    
  if (window.currentUser) {
    store.dispatch(receiveCurrentUser(window.currentUser))
    delete window.currentUser;
  } 

  //Testing
  window.login = login;
  window.signup = signup;
  window.logout = logout;

  window.fetchCharacter = APISwapiUtil.fetchCharacter;
  //Testing

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
