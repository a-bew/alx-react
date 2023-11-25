import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

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


// uiActionCreators.test.js
import { loginRequest } from './uiActionCreators';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';


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


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators - Async Actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    test('loginRequest success', async () => {
        fetchMock.getOnce('/login-success.json', {
            body: {},
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

        const expectedActions = [
            { type: LOGIN, user: { email: 'user@example.com', password: 'password123' } },
            { type: LOGIN_SUCCESS },
        ];

        const store = mockStore({});

        await store.dispatch(loginRequest('user@example.com', 'password123'));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('loginRequest failure', async () => {
        fetchMock.getOnce('/login-success.json', 500);

        const expectedActions = [
            { type: LOGIN, user: { email: 'user@example.com', password: 'password123' } },
            { type: LOGIN_FAILURE },
        ];

        const store = mockStore({});

        await store.dispatch(loginRequest('user@example.com', 'password123'));

        expect(store.getActions()).toEqual(expectedActions);
    });
});