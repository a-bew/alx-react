import React, { Component, Fragment } from 'react';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import { CSSVariables } from '../CssVariables/CssVariables'


const styles = StyleSheet.create({
  app: {
    // Define styles for your App component here
    // backgroundColor: CSSVariables.backgroundColor,
  },
  appBody: {
    // Define styles for the App body here
    padding: '50px',
    flex: '0 0 100%',
    minHeight: 'calc(100vh - 200px - 50px)',
    borderTop: `4px solid ${CSSVariables.backgroundColor}`,
    borderBottom: `4px solid ${CSSVariables.backgroundColor}`,
  },
  // Define other styles as needed
});

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

  componentWillUnmount() {
    // Remove the event listener when the component is unmounted
    document.removeEventListener('keydown', this.handleKeyDown);
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
        <div className={css(styles.app)}>
          <Header />
          <div className={css(styles.appBody)}>
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
