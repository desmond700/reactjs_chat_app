import React, { Component } from 'react';
import './App.css';
import { Layout } from './layout/Layout'
import { ListPanel } from './components/UsersList'
import { MessagePanel } from './components/MessagePanel'
import { Switch, Route } from 'react-router-dom';
import AppRoute from './components/AppRoute';
import { Login } from './components/Login'
import { Register } from './components/Register'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <AppRoute exact path="/chat/:username" layout={Layout} listPanel={<ListPanel />} messagePanel={<MessagePanel />} />
      </Switch>
    );
  }
}

export default App;
