import React, { useState } from 'react';
import './chat.css'; // Import your CSS file

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(true);

  const send = () => {
    if (inputText.trim() === '') return;

    // Add the user's message to the messages state
    setMessages([...messages, { text: inputText, type: 'sent' }]);
    setInputText('');

    // Simulate a response after 1 second
    setTimeout(() => {
      addResponseMsg('Hi there! How can I assist you?');
    }, 1000);
  };

  const addResponseMsg = (msg) => {
    // Add the chatbot's response to the messages state
    setMessages([...messages, { text: msg, type: 'received' }]);
  };

  const toggleChatbot = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) {
      setTimeout(() => {
        addResponseMsg('Hi there! How can I assist you?');
      }, 1000);
    }
  };

  return (
    <div className={`main-card ${isCollapsed ? 'collapsed' : ''}`}>
      <button id="chatbot_toggle" onClick={toggleChatbot}>
        {!isCollapsed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{}}
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" />
          </svg>
        )}
      </button>
      <div className="main-title">
        <div>
          <svg viewBox="0 0 640 512" title="robot">
            <path
              fill="currentColor"
              d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"
            />
          </svg>
        </div>
        <span>Chatbot</span>
      </div>
      <div className="chat-area" id="message-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message-div ${
              msg.type === 'sent' ? 'chat-message-sent' : 'chat-message-received'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="line"></div>
      <div className="input-div">
        <input
          className="input-message"
          name="message"
          type="text"
          id="message"
          placeholder="Type your message ..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              send();
            }
          }}
        />
        <button className="input-send" onClick={send}>
          <svg style={{ width: '24px', height: '24px' }}>
            <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
