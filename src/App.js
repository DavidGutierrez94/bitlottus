import React, {Component} from 'react'
import {Link, Route, BrowerRouter, HashRouter} from 'react-router-dom'
import { Router, Switch } from 'react-router'

import Login from './Views/Login/Login'
import Home from './Views/Home/Home'
import Profile from './Views/Profile/Profile'
class App extends Component {
  render() {
    return (
      <HashRouter>
          <div>
              <Route exact path="/" component={Login}/>
              <Route exact path="/Home" component={Home}/>
              <Route exact path="/Profile" component={Profile}/>
          </div>
      </HashRouter>
    );
  }
}
export default App;
