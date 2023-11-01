import React from 'react'
import closeIcon from "../assets/close-icon.png";

import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

export const Notifications = () => {
    return (<div className='Notifications'>
        <button
            style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
            aria-label="Close"
            onClick={console.log("Close button has been clicked")}
        >
            <img src={closeIcon} alt="closeIcon" width="10px" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
            <NotificationItem type="default">New course available</NotificationItem>
            <NotificationItem type="urgent">New resume available</NotificationItem>
            <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
        </ul>
    </div>)
}