import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux"
import { Provider } from 'react-redux'

import App from './components/App/App';
import { rootReducer } from './redux/reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

