// reducers/uiReducer.test.js
import { Map } from 'immutable';
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

        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map(),
        });

        const nextState = uiReducer(undefined, {});

        expect(nextState.toJS()).toEqual(initialState.toJS());

    });

    it('should return the initial state when the action SELECT_COURSE is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map(),
        });

        const nextState = uiReducer(initialState, { type: 'SELECT_COURSE' });

        expect(nextState.toJS()).toEqual(initialState.toJS());
    });

    it('should update isNotificationDrawerVisible to true when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map(),
        });

        const nextState = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });

        expect(nextState.get('isNotificationDrawerVisible')).toBe(true);
        // Using toJS for easy comparison
        expect(nextState.toJS()).toEqual({ ...initialState.toJS(), isNotificationDrawerVisible: true });
    });

    // Add more tests for other action types as needed

    // For example:
    it('should update isUserLoggedIn to true when the action LOGIN_SUCCESS is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map(),
        });

        const nextState = uiReducer(initialState, { type: LOGIN_SUCCESS });

        expect(nextState.get('isUserLoggedIn')).toBe(true);
        // Using toJS for easy comparison
        expect(nextState.toJS()).toEqual({ ...initialState.toJS(), isUserLoggedIn: true });
    });

    it('should update isUserLoggedIn to false when the action LOGIN_FAILURE is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: Map(),
        });

        const nextState = uiReducer(initialState, { type: LOGIN_FAILURE });

        expect(nextState.get('isUserLoggedIn')).toBe(false);
        // Using toJS for easy comparison
        expect(nextState.toJS()).toEqual({ ...initialState.toJS(), isUserLoggedIn: false });
    });

    it('should update isUserLoggedIn to false when the action LOGOUT is passed', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: Map(),
        });

        const nextState = uiReducer(initialState, { type: LOGOUT });

        expect(nextState.get('isUserLoggedIn')).toBe(false);
        // Using toJS for easy comparison
        expect(nextState.toJS()).toEqual({ ...initialState.toJS(), isUserLoggedIn: false });
    });
});
