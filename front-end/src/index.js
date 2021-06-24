import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux';
// why again?
import thunk from 'redux-thunk'
import poiReducer from './reducers/poiReducer'
import locationReducer from './reducers/locationReducer'

const rootReducer = combineReducers({
  locationReducer,
  poiReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  // does this connect to html?  why is nothing i type in the html working?
);

