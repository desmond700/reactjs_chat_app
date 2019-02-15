import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <div className="container-fluid bg-secondary">
        <h3>title</h3>
        <Row className="container-row">
          <Col xs={6} md={3} className="bg-dark list-section">
              {this.props.listPanel}
          </Col>
          <Col xs={12} md={9} className="message-section">
              {this.props.messagePanel}
          </Col>
        </Row>
      </div>
    );
  }
}