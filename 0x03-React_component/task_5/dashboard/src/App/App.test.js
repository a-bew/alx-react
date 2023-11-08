// App.test.js
import React from "react";
import { shallow } from 'enzyme';
import App from './App';
import { Notifications } from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

describe('App Component', () => {

    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('should contain the Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications)).toHaveLength(1);
    });

    it('should contain the Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header)).toHaveLength(1);
    });

    it('should contain the Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login)).toHaveLength(1);
    });

    it('should contain the Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });

    it('CourseList is not displayed', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CourseList)).toHaveLength(0);
    });

    it('Login component is not included', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(Login)).toHaveLength(0);
    });

    it('CourseList component is included', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(CourseList)).toHaveLength(1);
    });

    it('calls logOut and shows an alert when Ctrl+H keys are pressed', () => {
        // Create a mock logOut function
        const logOutMock = jest.fn();

        // Mock the alert function
        const originalAlert = window.alert;
        window.alert = jest.fn();

        // Render the App component with the mock logOut function as a prop
        const wrapper = shallow(<App isLoggedIn={true} logOut={logOutMock} />);

        // Simulate a keydown event with Control and 'h' keys
        wrapper.simulate('keydown', {
            key: 'h',
            ctrlKey: true,
        });

        // Assert that the logOut function is called
        expect(logOutMock).toHaveBeenCalled();

        // Assert that an alert with the specified message is shown
        expect(window.alert).toHaveBeenCalledWith('Logging you out');

        // Restore the original alert function
        window.alert = originalAlert;
    });

});