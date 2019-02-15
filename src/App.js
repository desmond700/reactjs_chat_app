import React, { Component } from 'react';
import './App.css';
import { Layout } from './layout/Layout'
import { ListPanel } from './components/UsersList'
import { MessagePanel } from './components/MessagePanel'

class App extends Component {
  render() {
    return (
      <Layout 
        listPanel={<ListPanel/>}
        messagePanel={<MessagePanel/>}
      />
    );
  }
}

export default App;
