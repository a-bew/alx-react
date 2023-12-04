// reducers/uiReducer.test.js
import uiReducer from './uiReducer';
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
    it('should return the initial state when no action is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };

        const nextState = uiReducer(undefined, {});

        expect(nextState).toEqual(initialState);
    });

    it('should return the initial state when the action SELECT_COURSE is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };

        const nextState = uiReducer(initialState, { type: 'SELECT_COURSE' });

        expect(nextState).toEqual(initialState);
    });

    it('should update isNotificationDrawerVisible to true when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };

        const nextState = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });

        expect(nextState.isNotificationDrawerVisible).toBe(true);
    });

    // Add more tests for other action types as needed

    // For example:
    it('should update isUserLoggedIn to true when the action LOGIN_SUCCESS is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };

        const nextState = uiReducer(initialState, { type: LOGIN_SUCCESS });

        expect(nextState.isUserLoggedIn).toBe(true);
    });

    it('should update isUserLoggedIn to false when the action LOGIN_FAILURE is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: {},
        };

        const nextState = uiReducer(initialState, { type: LOGIN_FAILURE });

        expect(nextState.isUserLoggedIn).toBe(false);
    });

    it('should update isUserLoggedIn to false when the action LOGOUT is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: {},
        };

        const nextState = uiReducer(initialState, { type: LOGOUT });

        expect(nextState.isUserLoggedIn).toBe(false);
    });
});
