import React from 'react';
import './Chatroom.css';

function Chatroom() {
  return (
    <div className="container chatroom">
      <div className="row chatroom-header">
        <div className="col-10">
          <h5>Chat Room</h5>
        </div>
        <div className="col-2 text-end">
          <button className="btn camera-icon">
            <i className="bi bi-camera"></i>
          </button>
        </div>
      </div>
      {/* Rest of your chatroom content */}
      <div className="chatroom-content">
        {/* Messages will go here */}
      </div>
      <div className="row chatroom-footer">
        <div className="col-1">
          <label htmlFor="file-upload" className="btn attach-btn">
            <i className="bi bi-paperclip"></i>
          </label>
          <input id="file-upload" type="file" style={{display: 'none'}} />
        </div>
        <div className="col-8">
          <input type="text" className="form-control" placeholder="Type your message here..." />
        </div>
        <div className="col-3 text-end">
          <button className="btn send-btn">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chatroom;
