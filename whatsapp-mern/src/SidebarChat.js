import { Avatar } from "@material-ui/core";
import React from 'react';
import './SidebarChat.css';


function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar src="https://avatars3.githubusercontent.com/u/57477426?s=460&u=920a9aa965297510d74cef93973710dc535892fc&v=4"/>
            <div className="sidebarChat__info">
                <h3>Ritesh Naik</h3>
                <p>Hi buddy </p>

            </div>
        </div>
    )
};


export default SidebarChat
