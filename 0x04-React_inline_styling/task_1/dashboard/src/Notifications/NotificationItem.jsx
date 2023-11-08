import React from 'react';
import PropTypes from 'prop-types';
import './NotificationItem.css';

function NotificationItem({ type, html, value, id, markAsRead }) {
  // Function to mark the notification as read and call markAsRead
  const handleClick = () => {
    if (markAsRead) {
      markAsRead(id);
    }
  };

  return (
    <li data-notification-type={type} onClick={handleClick}>
      {html ? <div dangerouslySetInnerHTML={html} /> : value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string,
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func,
};

export default React.memo(NotificationItem);
