import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

function Sidebar() {
    return (
        <div className="sidebar">
            <h1>Sidebar component.... </h1>
            <div className="sidebar__header">
                <div className="sidebar__headerLeft">

                </div>
                <div className="sidebar__headerRight">
                    <DonutLargeIcon />
                    {/* <ChatIcon /> */}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
