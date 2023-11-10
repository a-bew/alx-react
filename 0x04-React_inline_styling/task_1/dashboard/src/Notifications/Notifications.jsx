import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { CSSVariables } from '../CssVariables/CssVariables'

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    notifications: {
        padding: '50px',
        border: `2px dashed ${CSSVariables.backgroundColor}`,
        top: '10px',
        width: '95vw',
        maxWidth: '500px',
    },
});


export const NotificationItemShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
});

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    // Define the markAsRead function
    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
    };

    shouldComponentUpdate(nextProps) {
        // Only update when the new listNotifications is longer than the previous one
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    render() {
        const { displayDrawer = true, listNotifications = [] } = this.props;

        return (
            <>
                <div className="menuItem">Your notifications</div>

                {displayDrawer && (
                    <div className={css(styles.notifications)}>

                        <button
                            style={{
                                color: '#3a3a3a',
                                fontWeight: 'bold',
                                background: 'none',
                                border: 'none',
                                fontSize: '15px',
                                position: 'absolute',
                                right: '2px',
                                top: '2px',
                                cursor: 'pointer',
                            }}
                            aria-label="Close"
                            onClick={() => console.log('Close button has been clicked')}
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

export default Notifications;
