import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types'; // Import PropTypes
import aphrodite, { css } from 'aphrodite';

const styles = aphrodite.StyleSheet.create({
    courseList: {
        width: '100%',
        borderCollapse: 'collapse',
        margin: '20px 0',
        border: '1px solid black',
    }
});

export const CourseShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
});

function CourseList({ listCourses = [] }) {
    return (
        <table className={css(styles.courseList)}>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length === 0 ? (
                    <CourseListRow textFirstCell="No course available yet" isHeader={false} />
                ) : (
                    listCourses.map((course) => (
                        <CourseListRow
                            key={course.id} // Add a unique key for React optimization
                            textFirstCell={course.name}
                            textSecondCell={course.credit.toString()}
                            isHeader={false}
                        />
                    ))
                )}
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape), // Define the prop type for listCourses
};

CourseList.defaultProps = {
    listCourses: [], // Default to an empty array if not passed by the parent component
};


export default CourseList;
