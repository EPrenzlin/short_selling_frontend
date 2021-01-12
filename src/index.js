import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import exemptionReducer from './reducers/exemptionReducer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

 
const store = createStore(exemptionReducer,applyMiddleware(thunk))
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);


