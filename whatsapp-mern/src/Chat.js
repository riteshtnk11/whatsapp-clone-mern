import React, { useState }from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./Chat.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { AttachFile } from "@material-ui/icons";
import axios from "./axios";

function Chat({ messages }) {
  const [input,setInput] = useState("");

  //send message in chat
  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new', {

        "message": input,
        "name": "Ritesh",
        "timestamp": "just now",
        "received": true 
    });

    setInput('');
  };

  return (
    <div className="chat">
      {/**Chat Header */}
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Group name </h3>
          <p>Last seen at 11:07 pm</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      {/**Chat Body */}
      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${message.received && 'chat__receiver'}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>
      {/**Chat Footer */}
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <AttachFile />
        <form>
          <input value={input} onChange={e =>setInput(e.target.value)} placeholder="Type a message" type="text" />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
