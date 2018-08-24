import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import Reg from './login/reg.js'
import Login from './login/login.js'
import Main from './wangyi/main.js'
import SongSheet from './wangyi/songsheet.js';
import Audio from './wangyi/audio.js';
import User from './wangyi/user.js'
import RecentlyMusic from './wangyi/recentlyMusic.js'
import store from './store/store.js'
import { Provider } from "react-redux";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div>
              <Route path="/login" component={Login} />
              <Route path="/reg" component={Reg} />
              <Route path="/main" component={Main} />
              <Route path="/songsheet" component={SongSheet} />
              <Route path="/audio" component={Audio} />
              <Route path="/user" component={User} />
              <Route path="/recentlyMusic" component={RecentlyMusic} />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
