import React, { Fragment, useState } from "react";
import './App.css';
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Notifications } from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";

function App({ isLoggedIn = false }) {
  return (
    <Fragment>
      <div style={{ position: 'absolute', right: 0 }}>
        <Notifications />

      </div>
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? (
            <CourseList />
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
