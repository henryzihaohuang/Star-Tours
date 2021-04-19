import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {  receiveCurrentUser } from './actions/sessionActions';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

  //Persist user session across refreshes
  if (window.currentUser) {
    store.dispatch(receiveCurrentUser(window.currentUser)) 
    delete window.currentUser;
  } 

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
