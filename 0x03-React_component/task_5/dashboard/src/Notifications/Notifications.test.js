// Notifications.test.js 
import React from "react";
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

const listNotifications = [
    {
        id: 1,
        type: 'default',
        value: 'Notification 1',
        html: { __html: getLatestNotification() },
    },
    {
        id: 2,
        type: 'urgent',
        value: 'Notification 2',
        html: { __html: getLatestNotification() },
    },
    {
        id: 3,
        type: 'default',
        value: 'Notification 3',
        html: { __html: getLatestNotification() },
    },
];

describe('Notifications', () => {

    it('renders without crashing', () => {
        shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    });

    it("renders ul", () => {
        const notification = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        expect(notification.find("ul")).toBeDefined();
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.find('p').text()).toContain('Here is the list of notifications');
    });

    it('should render the correct HTML for the first NotificationItem', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        const firstNotificationItem = wrapper.find(NotificationItem).at(2); // Adjust the selector to match your component hierarchy
        const expectedHtml = getLatestNotification(); // Modify this to match your expected HTML content
        // Access the html prop directly from the firstNotificationItem props
        expect(firstNotificationItem.props().html).toEqual({ __html: expectedHtml });
    });


    it('menu item is displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={[]} />);
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    it('div.Notifications is not displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={[]} />);
        expect(wrapper.find('.Notifications').exists()).toBe(false);
    });

    it('menu item is displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    it('div.Notifications is displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        expect(wrapper.find('.Notifications').exists()).toBe(true);
    });

    it('calls console.log with the right message when markAsRead is called', () => {
        // Create a mock console.log function
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

        // Render the Notifications component
        const wrapper = shallow(<Notifications />);

        // Access the instance of the component to call markAsRead
        const instance = wrapper.instance();
        instance.markAsRead(1); // You can use any ID you like

        // Assert that console.log was called with the correct message
        expect(consoleLogSpy).toHaveBeenCalledWith('Notification 1 has been marked as read.');

        // Restore the original console.log function
        consoleLogSpy.mockRestore();
    });
});