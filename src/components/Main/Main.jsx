import React, { useContext, useState } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
  const [input, setInput] = useState('');
  const { onSent, chat } = useContext(Context); // use chat from context

  const handleSend = () => {
    if (input.trim() !== '') {
      onSent(input);
      setInput('');
    }
  };

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Dev.</span></p>
          <p>How can I help you today</p>
        </div>

        {/* Show Chat Messages Here */}
        <div className="chat-area">
          {chat.map((item, index) => (
            <div key={index} className={`chat-bubble ${item.type}`}>
              <p>{item.message}</p>
            </div>
          ))}
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder='Enter a prompt here'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div onClick={handleSend}>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people. Double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
