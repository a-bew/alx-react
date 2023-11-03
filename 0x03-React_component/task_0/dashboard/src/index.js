import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
// import { Notifications } from './Notifications/Notifications';

ReactDOM.render(
    <React.StrictMode>
        <App />
        {/* <div className='root-notifications'>
            <Notifications />
        </div> */}
    </React.StrictMode>,
    document.getElementById('root')
);