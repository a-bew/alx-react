import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


describe('NotificationItem Component', () => {
    it('should render without crashing', () => {

        shallow(<NotificationItem />);
    });

    it('should render with dummy type and value', () => {
        const type = 'default';
        const value = 'test';
        const wrapper = shallow(<NotificationItem type={type}>{value}</NotificationItem>); // Pass value as children
        expect(wrapper.find('li').prop('data-notification-type')).toBe(type);
        expect(wrapper.text()).toBe(value);
    });

    it('should render with dummy HTML', () => {
        const html = { __html: '<u>test</u>' };
        const wrapper = shallow(<NotificationItem html={html} />);
        expect(wrapper.find('li').prop('data-notification-type')).toBeUndefined();
        expect(wrapper.find('li div').prop('dangerouslySetInnerHTML')).toEqual(html);
    });

    it('calls markAsRead with the correct ID when clicked', () => {
        // Create a spy function to pass as the markAsRead prop
        const markAsReadSpy = jest.fn();

        // Define a sample notification ID
        const id = 1;

        // Render the NotificationItem component with the spy function and ID
        const wrapper = shallow(
            <NotificationItem type="default" html={{ __html: 'Test Notification' }} id={id} markAsRead={markAsReadSpy} />
        );

        // Simulate a click event on the component
        wrapper.find('li').simulate('click');

        // Assert that the markAsRead spy was called with the correct ID
        expect(markAsReadSpy).toHaveBeenCalledWith(id);
    });
});
