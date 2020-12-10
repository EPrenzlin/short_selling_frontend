import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import exemptionReducer from './reducers/exemptionReducer.js';
 
const store = createStore(exemptionReducer,applyMiddleware(thunk))
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// routes go her ; we'll have an index page where we can see all the existing exmpetions and also download into csv
// we'll have an form page where we can add in new exemption, and also 
// we'll have a log-in page as well?
// need to add in the providers 
// think about which containers / components I want 
// how that will handle the states and function 
// will have an exemption container, which will have a form to add in new exemptions, and a exemption list, which will iterate and display all of the exemptions on a card basis 
// have the log-in/ pwd and then displaying the next display options. 
// actions for my redux... add and delete. 
// export to csv function for all newly created exemptions => maybe have a child of the form component, which will have it's state updated whenever 
