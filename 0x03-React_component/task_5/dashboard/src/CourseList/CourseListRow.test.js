import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
    it('should render one cell with colspan = 2 when textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header Cell" textSecondCell={null} />);
        expect(wrapper.find('th').prop('colSpan')).toBe(2);
        expect(wrapper.find('th').length).toBe(1);
    });

    it('should render two cells when textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header Cell" textSecondCell="Second Cell" />);
        expect(wrapper.find('th').length).toBe(2);
    });

    it('should render two td elements within a tr element', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Data Cell 1" textSecondCell="Data Cell 2" />);
        expect(wrapper.find('td').length).toBe(2);
        expect(wrapper.find('tr').length).toBe(1);
    });
});
