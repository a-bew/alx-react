// notifications.js

import * as notificationsData from '../../notifications.json';

export function getAllNotificationsByUser(userId) {
    return notificationsData.filter(notification => notification.author === userId);
}

const user = new schema.Entity('users');

const message = new schema.Entity(
    'messages',
    {},
    {
        idAttribute: 'guid',
    }
);

const notification = new schema.Entity('notifications', {
    author: user,
    context: message,
});

const normalized = normalize(notificationsData.default, [notification]);

export { normalized };