// Notifications.test.js 

import { shallow } from 'enzyme';
import { Notifications } from './Notifications';

describe('Notifications', () => {

    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it("renders ul", () => {
        const notification = shallow(<Notifications />);
        expect(notification.find("ul")).toBeDefined();
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.text()).toContain('Here is the list of notifications');
    });

});