import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
