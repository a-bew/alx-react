import React, { Fragment, useState } from "react";
import './App.css';
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Notifications } from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";

function App({ isLoggedIn = false }) {

  const listNotifications = [
    {
      id: 1,
      html: { __html: getLatestNotification() },
      type: "default",
      value: "New course available",
    },
    {
      id: 2,
      html: { __html: getLatestNotification() },
      type: "urgent",
      value: "New resume available",
    },
    {
      id: 3,
      html: { __html: getLatestNotification() },
      type: "urgent",
      value: "New notification",
    },
  ];

  // Create the listCourses array
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  return (
    <Fragment>
      <div style={{ position: 'absolute', right: 0 }}>
        <Notifications displayDrawer={false} listNotifications={listNotifications} />
      </div>
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? (
            <CourseList listCourses={listCourses} />
          ) : (
            <Login />
          )}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;