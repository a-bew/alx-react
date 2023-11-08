import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import { NotificationItemShape } from './NotificationItem';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

class Notifications extends Component {
    constructor(props) {
        super(props);

        this.markAsRead = this.markAsRead.bind(this);

    }

    // Define the markAsRead function
    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
    };

    render() {
        const { displayDrawer = true, listNotifications = [] } = this.props;

        return (
            <>
                <div className="menuItem">Your notifications</div>

                {displayDrawer && (
                    <div className="Notifications">
                        <button
                            style={{
                                color: "#3a3a3a",
                                fontWeight: "bold",
                                background: "none",
                                border: "none",
                                fontSize: "15px",
                                position: "absolute",
                                right: "2px",
                                top: "2px",
                                cursor: "pointer",
                            }}
                            aria-label="Close"
                            onClick={() => console.log("Close button has been clicked")}
                        >
                            <img src={closeIcon} alt="closeIcon" width="10px" />
                        </button>
                        {listNotifications.length === 0 ? (
                            <p>No new notification for now</p>
                        ) : (
                            <p>Here is the list of notifications</p>
                        )}
                        <ul>
                            {listNotifications?.map((notification) => (
                                <NotificationItem
                                    key={notification.id}
                                    type={notification.type}
                                    value={notification.value}
                                    html={notification.html}
                                    // Pass the markAsRead function to NotificationItem
                                    markAsRead={() => this.markAsRead(notification.id)}
                                />
                            ))}
                        </ul>
                    </div>
                )}
            </>
        );
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape).isRequired,
};

export default Notifications
