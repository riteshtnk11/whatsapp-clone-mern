import { Avatar } from "@material-ui/core";
import React from 'react';
import './SidebarChat.css';


function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h3>Ritesh Naik</h3>
                <p>Hi buddy </p>

            </div>
        </div>
    )
};


export default SidebarChat
