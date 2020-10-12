import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./Chat.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { SearchOutlined } from "@material-ui/icons";
import { AttachFile } from "@material-ui/icons";

function Chat() {
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
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      {/**Chat Body */}
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Ritesh</span>
          This is a receiver message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Ritesh</span>
          This is a sender message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Ritesh</span>
          This is a sender message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Ritesh</span>
          This is a sender message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Ritesh</span>
          This is a sender message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Ritesh</span>
          This is a sender message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        
      </div>
      {/**Chat Footer */}
      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
