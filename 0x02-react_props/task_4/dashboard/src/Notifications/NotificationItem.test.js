import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

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
});
