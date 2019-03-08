import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import socketIOClient from 'socket.io-client'
import { Header } from '../components/Header'

export class Layout extends Component {
  displayName = Layout.name

  constructor(props){
    super(props);
    
    this.state = {
      endpoint: "http://192.168.0.10:4001", // this is where we are connecting to with sockets
      username: this.props.computedMatch.params.username
    } 
  }


  send = () => {
    const socket = socketIOClient(this.state.endpoint)
    
    // this emits an event to the socket (your server) with an argument of 'red'
    // you can make the argument any color you would like, or any kind of data you want to send.
    
    socket.emit('UserConnected', 'Desmond') 

    socket.on("status", (message) => {
        console.log("Desmond is "+message);
    })

    
  }

  render() {
    this.send();
    console.log(this.props.computedMatch.params.username);
    let { listPanel, messagePanel } = this.props;


    const listPanelComponent = React.Children.map(listPanel, child => {
      return React.cloneElement(child, {
        username: this.state.username,
      });
    });

    /*const messagePanelComponent = React.Children.map(messagePanel, child => {
      return React.cloneElement(child, {
        username: this.state.username,
      });
    });*/

    return (
      <div className="container">
          <Col md={12} className="header">
              <Header />
          </Col>
          <Row>
            <Col xs={12} md={3} className="list-panel">
              {listPanelComponent}
            </Col>
            <Col xs={12} md={9} className="message-panel">
              {this.props.messagePanel}
            </Col>
          </Row>
      </div>
    );
  }
}