// uiActionCreators.test.js
import {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
} from './uiActionCreators';
import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

test('login action creator', () => {
    const email = 'user@example.com';
    const password = 'password123';
    const action = login(email, password);

    expect(action).toEqual({
        type: LOGIN,
        user: { email, password },
    });
});

test('logout action creator', () => {
    const action = logout();

    expect(action).toEqual({
        type: LOGOUT,
    });
});

test('displayNotificationDrawer action creator', () => {
    const action = displayNotificationDrawer();

    expect(action).toEqual({
        type: DISPLAY_NOTIFICATION_DRAWER,
    });
});

test('hideNotificationDrawer action creator', () => {
    const action = hideNotificationDrawer();

    expect(action).toEqual({
        type: HIDE_NOTIFICATION_DRAWER,
    });
});
