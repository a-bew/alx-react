import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './CourseListRow.css';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    if (isHeader) {
        if (!textSecondCell) {
            return (
                <tr className="course-list-header">
                    <th colSpan={2}>{textFirstCell}</th>
                </tr>
            );
        } else {
            return (
                <tr className="course-list-header">
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            );
        }
    } else {
        return (
            <tr className="course-list-data">
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool.isRequired,
    textFirstCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Accepts string or number
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Accepts string or number
};

export default CourseListRow;
