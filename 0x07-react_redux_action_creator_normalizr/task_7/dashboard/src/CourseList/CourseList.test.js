import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// Create the listCourses array
const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },

];
describe('CourseList Component', () => {
    it('should render CourseList component without crashing', () => {
        shallow(<CourseList />);
    });

    it('should render the 5 different rows', () => {
        const wrapper = shallow(<CourseList listCourses={listCourses} />);
        expect(wrapper.find(CourseListRow).length).toBe(5);
    });

    it('renders correctly with an empty listCourses array', () => {
        const wrapper = shallow(<CourseList listCourses={[]} />);
        expect(wrapper.find('#CourseList').exists()).toBe(true);
        const tbody = wrapper.find('tbody');
        expect(tbody.exists()).toBe(true); // Check if tbody element exists

        if (listCourses.length === 0) {
            expect(tbody.find(CourseListRow).exists()).toBe(false); // Check if CourseListRow components are not present inside tbody
            expect(tbody.text()).toContain('No course available yet'); // Check if the message is displayed
        } else {
            expect(tbody.find(CourseListRow).exists()).toBe(true); // Check if CourseListRow components are present inside tbody
        }
    });

    it('renders listCourses correctly', () => {
        const listCourses = [
            {
                id: 1,
                name: 'ES6',
                credit: 60,
            },
            {
                id: 2,
                name: 'Webpack',
                credit: 20,
            },
        ];
        const wrapper = shallow(<CourseList listCourses={listCourses} />);
        const numExpectedRows = listCourses.length + 2; // Add 2 for the header rows
        expect(wrapper.find('#CourseList').exists()).toBe(true);
        expect(wrapper.find(CourseListRow)).toHaveLength(numExpectedRows);
    });

    it('renders correctly when listCourses is not provided', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('#CourseList').exists()).toBe(true);

        const numExpectedRows = 2; // Add 2 for the header rows

        // expect(wrapper.find(CourseListRow).toHaveLength(numExpectedRows));
        // expect(wrapper.find('tbody').text()).toContain('No course available yet');
    });
});
