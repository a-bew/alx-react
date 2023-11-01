import React from 'react';
import './NotificationItem.css';

function NotificationItem({ type, html, children: value }) {
  return (
    <li data-notification-type={type}>
      {html ? <div dangerouslySetInnerHTML={html} /> :
        value}
    </li>
  );
}

export default NotificationItem;
