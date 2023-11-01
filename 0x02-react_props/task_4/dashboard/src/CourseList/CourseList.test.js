import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList Component', () => {
    it('should render CourseList component without crashing', () => {
        shallow(<CourseList />);
    });

    it('should render the 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow).length).toBe(5);
    });
});
