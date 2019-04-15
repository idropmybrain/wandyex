import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import AppRouter from './AppRouter';
import store from './store';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <div>
      {AppRouter()}
    </div>
  </Provider>,
  target
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
