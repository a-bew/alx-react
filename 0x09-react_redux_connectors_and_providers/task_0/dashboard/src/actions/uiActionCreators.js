// uiActionCreators.js
import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

export const login = (email, password) => ({
    type: LOGIN,
    user: { email, password },
});

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
    type: LOGIN_FAILURE,
});

export const boundLogin = (email, password) => dispatch(login(email, password));

export const logout = () => ({
    type: LOGOUT,
});

export const boundLogout = () => dispatch(logout());

export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER,
});

export const boundDisplayNotificationDrawer = () =>
    dispatch(displayNotificationDrawer());

export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
});

export const boundHideNotificationDrawer = () =>
    dispatch(hideNotificationDrawer());

export const loginRequest = (email, password) => async (dispatch) => {
    dispatch(login(email, password));

    try {
        const response = await fetch('/login-success.json'); // Replace with your actual API endpoint
        const data = await response.json();

        if (response.ok) {
            dispatch(loginSuccess());
        } else {
            dispatch(loginFailure());
        }
    } catch (error) {
        dispatch(loginFailure());
    }
};