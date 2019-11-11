import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import storeFactory from './store';
import { Provider } from 'react-redux';
import { App } from './components';

const initialState = (localStorage['redux-store']) ?
  JSON.parse(localStorage['redux-store']) :
  {}

const saveState = () => {
  const state = JSON.stringify(store.getState());
  localStorage['redux-store'] = state;
}

const store = storeFactory(initialState);
store.subscribe(saveState);
window.store = store; // only for debugging

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
