// App.test.js
import React from "react";
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {

    it('renders without crashing', () => {
        shallow(<Header />);
    });

    it('renders a div with class App-header', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('div.App-header')).toHaveLength(1);
    });

});