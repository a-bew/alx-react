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
        [`@media (maxWidth: ${CSSVariables.mobileMaxWidth})`]: {
            padding: 0,
            border: 'none',
            width: '100%',
            maxWidth: '100%',
            maxHeight: '100%'
        }
    },
    ul: {
        padding: 0,
        margin: 0,
    },
    notificationTitle: {
        fontSize: '20px'
    },
    hide: {
        display: 'none'
    }
});

const keyframes = {
    fadeIn: {
        '0%': {
            opacity: 0.5,
        },
        '100%': {
            opacity: 1,
        },
    },
    bounce: {
        '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
        },
        '40%': {
            transform: 'translateY(-5px)',
        },
        '60%': {
            transform: 'translateY(5px)',
        },
    },
};

const animations = StyleSheet.create({
    fadeIn: {
        animationName: keyframes.fadeIn,
        animationDuration: '1s',
    },
    bounce: {
        animationName: keyframes.bounce,
        animationDuration: '0.5s',
        animationIterationCount: 3,
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
        this.menuItemRef = React.createRef();
    }

    menuItemRef = React.createRef();

    // Define the markAsRead function
    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
    };

    shouldComponentUpdate(nextProps) {
        // Only update when the new listNotifications is longer than the previous one
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }


    onHover = (isHovered) => {
        this.setState({ isHovered });
        if (isHovered) {
            // Apply animations on hover
            this.applyAnimation(this.menuItemRef.current, animations.fadeIn);
            // this.applyAnimation(styles.notifications, animations.bounce);
        } else {
            // Reset styles on mouse leave
            this.applyAnimation(this.menuItemRef.current, null);
            // this.applyAnimation(styles.notifications, null);
        }
    };

    applyAnimation = (element, animation) => {
        if (element) {
            element.style.animation = animation ? `${css(animation)} forwards` : 'none';
        }
    };

    render() {
        const { displayDrawer = true, listNotifications = [] } = this.props;

        // Ensure that menuItemRef is properly initialized
        if (!this.menuItemRef) {
            this.menuItemRef = React.createRef();
        }
        return (
            <>
                <div
                    ref={this.menuItemRef}
                    onMouseEnter={() => this.onHover(true)}
                    onMouseLeave={() => this.onHover(false)}
                    className={css(styles.menuItem, displayDrawer && styles.hide)}
                >
                    Your notification
                </div>
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
                            <p className={css(styles['notificationTitle'])}>No new notification for now</p>
                        ) : (
                            <p className={css(styles['notificationTitle'])}>Here is the list of notifications</p>
                        )}
                        <ul className={css(styles.ul)}>
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
