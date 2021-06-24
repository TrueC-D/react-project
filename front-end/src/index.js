import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux';
// why again?
import thunk from 'redux-thunk'
import poiReducer from './reducers/poiReducer'
// says it doesn't exist for some reason
import locationReducer from './reducers/locationReducer'

// require('dotenv').config()


// import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({
  locationReducer,
  poiReducer
})

// const store = createStore(locationReducer, applyMiddleware(thunk))
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  // does this connect to html?  why is nothing i type in the html working?
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Fetch Post location

// fetch('localhost:3000/locations', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ name: this.name,  start_visit: this.startVisit, end_visit:this.endVisit})})

// Fetch places:

// fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyBTtkMyUuOIWj7Wi6I25Ab-5J2YWgi2Gh4')
// reportWebVitals();
