// notifications.js

import * as notificationsData from './notifications.json';

export function getAllNotificationsByUser(userId) {
    return notificationsData.filter(notification => notification.author === userId);
}