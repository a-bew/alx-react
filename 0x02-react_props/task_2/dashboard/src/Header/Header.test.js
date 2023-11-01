// App.test.js
import React from "react";
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {

    it('renders without crashing', () => {
        shallow(<Header />);
    });

    it('renders a img and a h1', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});