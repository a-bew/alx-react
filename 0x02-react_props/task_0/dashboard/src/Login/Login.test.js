// App.test.js
import React from "react";
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {

    it('renders without crashing', () => {
        shallow(<Login />);
    });

    it('renders a div with class App-body', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('div.App-body')).toHaveLength(1);
    });

});