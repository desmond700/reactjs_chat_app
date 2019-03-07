import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Login } from '../components/Login'

export class Layout extends Component {
  displayName = Layout.name

  render() {

    return (
      <div className="container">
          <Col md={12} className="header">
              
            </Col>
          <Row>
            <Col xs={12} md={3} className="list-panel">
              {this.props.listPanel}
            </Col>
            <Col xs={12} md={9} className="message-panel">
              {this.props.messagePanel}
            </Col>
          </Row>
      </div>
    );
  }
}