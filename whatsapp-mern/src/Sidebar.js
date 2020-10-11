import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      {/*Sidebar header section */}
      <div className="sidebar__header">
        <div className="sidebar__headerLeft">
          <Avatar src="https://avatars3.githubusercontent.com/u/57477426?s=460&u=920a9aa965297510d74cef93973710dc535892fc&v=4" />
        </div>
        <div className="sidebar__headerRight">
          <IconButton>
            {" "}
            {/* To make Donut Button clickable */}
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            {" "}
            <ChatIcon />
          </IconButton>
          <IconButton>
            {" "}
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      {/*Sidebar searchbar section */}
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
