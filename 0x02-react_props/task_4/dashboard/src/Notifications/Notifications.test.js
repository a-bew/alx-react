// Notifications.test.js 
import React from "react";
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

describe('Notifications', () => {

    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it("renders ul", () => {
        const notification = shallow(<Notifications />);
        expect(notification.find("ul")).toBeDefined();
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.text()).toContain('Here is the list of notifications');
    });

    it('should render the correct HTML for the first NotificationItem', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        const firstNotificationItem = wrapper.find(NotificationItem).at(2); // Adjust the selector to match your component hierarchy
        const expectedHtml = getLatestNotification(); // Modify this to match your expected HTML content
        // Access the html prop directly from the firstNotificationItem props
        expect(firstNotificationItem.props().html).toEqual({ __html: expectedHtml });
    });


    it('menu item is displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    it('div.Notifications is not displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.Notifications').exists()).toBe(false);
    });

    it('menu item is displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    it('div.Notifications is displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.Notifications').exists()).toBe(true);
    });

});