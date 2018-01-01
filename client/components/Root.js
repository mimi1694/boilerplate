import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import store from '../store';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './Navbar'


export default class Root extends Component {
  componentDidMount () {
    
  }

  render() {
      console.log('!!!!!!!!!!!!!ROOT')
    return (
      <Router>
        <div>WHATS UP IM THE ROOT</div>
      </Router>
    )
  }
}