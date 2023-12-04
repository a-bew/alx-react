import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from './App/App';
import uiReducer, { initialState } from "./reducers/uiReducer";
import { Map } from "immutable";

// import { Notifications } from './Notifications/Notifications';

const store = createStore(uiReducer, Map(initialState));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>

            <App />
        </Provider>
        {/* <div className='root-notifications'>
            <Notifications />
        </div> */}
    </React.StrictMode>,
    document.getElementById('root')
);