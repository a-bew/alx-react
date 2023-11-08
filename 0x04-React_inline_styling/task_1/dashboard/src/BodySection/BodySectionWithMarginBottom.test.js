import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('BodySectionWithMarginBottom Component', () => {
    it('renders BodySection with correct props', () => {
        // Define test props
        const title = 'test title';
        const children = <p>test children node</p>;

        // Render the BodySectionWithMarginBottom component
        const wrapper = shallow(
            <BodySectionWithMarginBottom title={title}>{children}</BodySectionWithMarginBottom>
        );

        // Find the rendered BodySection component
        const bodySection = wrapper.find('BodySection');

        // Assert that the props are passed correctly to the child component
        expect(bodySection.props().title).toBe(title);
        expect(bodySection.props().children).toEqual(children);
    });
});
