// App.test.js
import React from "react";
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Login', () => {

    it('renders without crashing', () => {
        shallow(<Login />);
    });

    it('renders 2 input tags and 2 label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2); // Ensure there are 2 input tags
        expect(wrapper.find('label')).toHaveLength(2); // Ensure there are 2 label tags
    });

});