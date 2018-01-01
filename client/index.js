'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import style from '../public/index.css';
import Root from './components/Root'


ReactDOM.render(
  <Provider store={store}>
      <Root/>
  </Provider>,
  document.getElementById('app')
);