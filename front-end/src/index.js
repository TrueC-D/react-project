import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
// why again?
import thunk from 'redux-thunk'
import reducer from './reducers/reducer'
// import poiReducer from './reducers/poiReducer'
// import locationReducer from './reducers/locationReducer'
// import placesReducer from './reducers/placesReducer';

// const rootReducer = combineReducers({
//   locationReducer,
//   poiReducer,
//   placesReducer
// })
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  // does this connect to html?  why is nothing i type in the html working?
);

