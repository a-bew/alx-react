import React, { Component, Fragment } from 'react';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import { CSSVariables } from '../CssVariables/CssVariables'
import { user, AppContext } from './AppContext';
import { connect } from 'react-redux';


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
  mobileNotification: {
    position: 'absolute',
    right: 0,
    background: 'white',
    [`@media (maxWidth: ${CSSVariables.mobileMaxWidth})`]: {
      width: '100%',
      height: '100%'
    },
  }
  // Define other styles as needed
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);

    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,

      listNotifications: [
        { id: 1, value: "New course available", type: "default" },
        { id: 2, value: "New resume available", type: "urgent" },
        { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
      ]

    };
  }

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ]

  markNotificationAsRead(id) {
    const newList = this.state.listNotifications.filter(not => not.id !== id);
    this.setState({ listNotifications: newList });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true }, () => {
      this.forceUpdate(); // Force a re-render
    });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
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
      this.logOut();
    }
  };

  // Define the logOut function
  logOut() {
    this.setState({
      user: user
    });
  };

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    });
  }


  render() {
    console.log("this.state.user", this.state.user)
    const { displayDrawer } = this.state;

    return (
      <AppContext.Provider value={{
        user: this.state.user,
        logOut: this.state.logOut
      }}>

        <Fragment>
          {<div className={displayDrawer ? css(styles['mobileNotification']) : ''} style={{ position: 'absolute', right: 0, background: 'white', }}>
            <Notifications
              listNotifications={this.state.listNotifications}
              markNotificationAsRead={this.markNotificationAsRead}

              displayDrawer={this.state.displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
            />
          </div>}
          {<div className={css(styles.app)}
            style={{
              [`@media (maxWidth: ${CSSVariables.mobileMaxWidth})`]: {
                display: displayDrawer ? 'none' : 'block'
              }
            }}
          >
            <Header />
            <div className={css(styles.appBody)}>
              {this.state.user.isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login logIn={this.logIn} />}
            </div>
            <Footer />
          </div>}
        </Fragment>
      </AppContext.Provider>
    );
  }
}


// Add a default value for the logOut prop
App.defaultProps = {
  // logOut: () => { }, // Empty function by default
};

// Create mapStateToProps function
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'), // Assuming you are using Immutable.js Map
    // Add more properties as needed
  };
};


// Connect the component to the Redux store

export default connect(mapStateToProps)(App);
