import React, { Component } from 'react';

export class MessagePanel extends Component {
  displayName = MessagePanel.name

  render() {
    return (
      <div>
        <div className="mx-4 my-4">
            <h2>Message Panel</h2>
        </div>
        <div className="message-input">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}