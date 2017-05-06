import React, { Component } from 'react';
import logo from './logo.svg';
import navBar from './sections/navBar';
import sideBar from './sections/sideBar';
import login from './pages/login';
import { Link, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import { Router, Switch } from 'react-router';
class App extends Component {

  render() {
    
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={login} />
          <Route exact path="/navBar" component={navBar} />
          <Route exact path="/sideBar" component={sideBar} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
