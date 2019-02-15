
import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import socketIOClient from 'socket.io-client'

export class ListPanel extends Component {
  displayName = ListPanel.name
  
  constructor(props){
      super(props);
      
      this.state = {
        endpoint: "http://localhost:4001" // this is where we are connecting to with sockets
      } 
  }

  // method for emitting a socket.io event
  send = () => {
    const socket = socketIOClient(this.state.endpoint)
    
    // this emits an event to the socket (your server) with an argument of 'red'
    // you can make the argument any color you would like, or any kind of data you want to send.
    
    socket.emit('UserConnected', 'Desmond') 

    socket.on("status", (message) => {
        document.getElementsByClassName('statusTxt').innerHTML = message;
    })
  }

  render() {
    this.send();

    return (
      <div className="px-2 listpanel">
          <div>
          <p className="d-flex mt-4">
            <div className="d-flex">
              <img className="my-auto" src="/images/businessman_863430.png" alt="user" width="34" height="34" />
            </div>
            <div className="d-flex flex-wrap align-content-center h-100">
              <h5 className="text-white mb-0 col-12">Desmond</h5>
              <p className="statusTxt text-secondary mb-0 col-12">Offline</p>
            </div>
          </p>
          </div>
        <Nav defaultActiveKey="/home" className="flex-column mt-2">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
                Disabled
            </Nav.Link>
        </Nav>;
      </div>
    );
  }
}