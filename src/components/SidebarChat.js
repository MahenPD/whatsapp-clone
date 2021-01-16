import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div class="sidebarChat__info">
                <h2>Room Name</h2>
                <p>This is the Last Message</p>
            </div>
        </div>
    )
}

export default SidebarChat
