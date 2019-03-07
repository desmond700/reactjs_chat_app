import React, { Component } from 'react';

export class MessagePanel extends Component {
  displayName = MessagePanel.name

  render() {
    return (
      <div className="col-12">
          <div className="chat-sect h-100">
              <div className="d-flex pb-1">
                  <img id="backBtn" className="my-auto mr-2 border" src="~/img/baseline_arrow_back_white_18dp.png" alt="user" />
                  <h3 className="text-dark py-3 m-0">Your conversation with <span id="convo_partner_name" className="text-dark">convo_partner_name</span></h3>
              </div>   
              <span id="isTyping" className="text-center pb-1"></span>
              <div className="message-box">
                  <div className="message-status">message sent</div>
              </div>
              <input type="hidden" id="userInput" value="@Model.Username" />
              <div className="message-input d-flex">
                  <input type="text" id="messageInput" className="form-control" placeholder="Write a message" />
                  <button id="sendButton" className="btn">Send</button>
              </div>
          </div>
          <div className="no-chat h-100">
              <h3 className="text-center align-self-center flex-grow-1">Select an online user to begin chat</h3>
          </div>
      </div>
    );
  }
}