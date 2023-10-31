// App.test.js
import React from "react";
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {

    it('renders without crashing', () => {
        shallow(<Footer />);
    });


    it('renders a div with class App-footer', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('div.App-footer')).toHaveLength(1);
    });

});