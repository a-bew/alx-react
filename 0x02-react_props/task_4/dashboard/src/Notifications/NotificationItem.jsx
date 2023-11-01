import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './NotificationItem.css';

function NotificationItem({ type, html, children: value }) {
  return (
    <li data-notification-type={type}>
      {html ? <div dangerouslySetInnerHTML={html} /> : value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string, // Require type to be a defined prop and a string
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired, // Verify that html is an object with the key __html, and that the value is a string
  }),
  value: PropTypes.string, // Verify that value is a string
};

// Default props for type if not passed
// NotificationItem.defaultProps = {
//   type: 'default',
// };

export default NotificationItem;
