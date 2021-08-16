import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'regenerator-runtime/runtime';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
