import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import store from '../store';

import Navbar from './Navbar'


export default class Root extends Component {
  componentDidMount () {
    
  }

  render() {
      console.log('!!!!!!!!!!!!!ROOT')
    return (
      <div>
      {/*
        <div>{console.log('HELLO ROOT!')}</div>
        <Navbar />
        <main>
          <Switch>
              <Route exact path='/campuses' component={CampusPage} />
            <Route path='/campuses/:campusid' component={CampusInfo} />
            <Route exact path='/students' component={StudentTable} />
            <Route path='/students/:studentid' component={StudentPage} />
            <Route path='/home' component={HomePage} />
    <Redirect to='/home' />
    </Switch>
    </main>
  */}
      </div>
    )
  }
}