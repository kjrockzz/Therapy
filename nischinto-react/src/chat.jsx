import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([
    { text: 'Hey there!', user: 'User 1' },
    { text: 'Hi! How are you?', user: 'User 2' },
    { text: "I'm doing well, thanks. How about you?", user: 'User 1' },
    { text: "I'm good too.", user: 'User 2' },
    { text: 'That sounds great!', user: 'User 1' },
    { text: 'Yeah!', user: 'User 2' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, user: 'User 1' }]);
      setNewMessage('');
    }
  };

  return (
    <div style={{ marginTop: '70px' }}>
      <div style={{ maxWidth: '600px', margin: '200px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', position:'relative' }}>
      <h1>Chat Page</h1>
      <div style={{ height: '400px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px', textAlign: message.user === 'User 1' ? 'right' : 'left' }}>
            <div style={{ display: 'inline-block', backgroundColor: message.user === 'User 1' ? '#ff375f' : 'black', color: '#fff', padding: '10px', borderRadius: '10px' }}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex' }}>
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{ flex: 1, marginRight: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', resize: 'none' }}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage} style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#ff375f', color: '#fff', cursor: 'pointer' }}>
          Send
        </button>
      </div>
    </div>
    </div>
    
  );
}

export default Chat;