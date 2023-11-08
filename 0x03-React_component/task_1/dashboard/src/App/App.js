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

  componentDidMount() {
    // Add an event listener to listen for keydown events
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    // Check if the user is pressing the Control key and the 'h' key simultaneously
    if (event.ctrlKey && event.key === 'h') {
      // Display an alert and call the logOut function
      alert('Logging you out');
      this.props.logOut();
    }
  };

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

// Add a default value for the logOut prop
App.defaultProps = {
  logOut: () => { }, // Empty function by default
};

export default App;
