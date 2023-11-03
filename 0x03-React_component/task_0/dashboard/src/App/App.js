import React, { Component, Fragment } from 'react';
import './App.css';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Notifications } from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      listNotifications: [
        {
          id: 1,
          html: { __html: getLatestNotification() },
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          html: { __html: getLatestNotification() },
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          html: { __html: getLatestNotification() },
          type: 'urgent',
          value: 'New notification',
        },
      ],
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <div style={{ position: 'absolute', right: 0 }}>
          <Notifications displayDrawer={false} listNotifications={this.state.listNotifications} />
        </div>
        <div className="App">
          <Header />
          <div className="App-body">
            {this.state.isLoggedIn ? <CourseList listCourses={this.state.listCourses} /> : <Login />}
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
