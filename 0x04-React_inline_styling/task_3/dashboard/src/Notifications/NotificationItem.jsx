import React from 'react';
import PropTypes from 'prop-types';
import { CSSVariables } from '../CssVariables/CssVariables';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  urgent: {
    backgroundColor: CSSVariables.dataUrgent,
    color: 'white', // Set text color or any other styles for urgent items
    [`@media (max-width: ${CSSVariables.mobileMaxWidth})`]: {
      backgroundColor: 'inherit',
      color: CSSVariables.dataUrgent,
      borderBottom: "1px solid #000000",
      padding: '20px 20px 10px 10px',
      listStyle: 'none',
      width: '100%',
      fontSize: '20px'
    }
  },
  default: {
    backgroundColor: CSSVariables.dataDefault,
    // Add any other styles for default items
    [`@media (max-width: ${CSSVariables.mobileMaxWidth})`]: {
      backgroundColor: 'inherit',
      color: CSSVariables.dataDefault,
      borderBottom: "1px solid #000000",
      padding: '20px 20px 10px 10px',
      listStyle: 'none',
      width: '100%',
      fontSize: '20px'

    }

  },
});

function NotificationItem({ type, html, value, id, markAsRead }) {
  // Function to mark the notification as read and call markAsRead
  const handleClick = () => {
    if (markAsRead) {
      markAsRead(id);
    }
  };

  const itemStyles = type === 'urgent' ? styles.urgent : styles.default;

  return (
    <li data-notification-type={type} onClick={handleClick} className={css(itemStyles)}>
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