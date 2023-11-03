import React from 'react';
import PropTypes from 'prop-types';
import closeIcon from "../assets/close-icon.png";
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

// export const NotificationItemShape = PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     html: PropTypes.objectOf({
//         __html: PropTypes.string.isRequired,
//     }).isRequired,
//     type: PropTypes.string,
//     value: PropTypes.string,
// });
export const NotificationItemShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
});

export const Notifications = ({ displayDrawer = true, listNotifications = [] }) => {
    return (
        <>
            <div className='menuItem'>Your notifications</div>

            {displayDrawer && (
                <div className='Notifications'>
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
                            cursor: "pointer"
                        }}
                        aria-label="Close"
                        onClick={() => console.log("Close button has been clicked")} // Fix the onClick handler
                    >
                        <img src={closeIcon} alt="closeIcon" width="10px" />
                    </button>
                    {listNotifications.length === 0 ? <p>No new notification for now</p> : <p>Here is the list of notifications</p>}
                    <ul>
                        {
                            listNotifications?.map(notification => (
                                <NotificationItem
                                    key={notification.id}
                                    type={notification.type}
                                    value={notification.value}
                                    html={notification.html}
                                />
                            ))
                        }
                    </ul>
                </div>
            )}
        </>
    );
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape).isRequired, // Add prop type for listNotifications
};
