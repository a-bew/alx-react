import React from 'react';
import PropTypes from 'prop-types';
import './CourseListRow.css';

// Define constants for row styles
const rowStyle = {
    backgroundColor: '#f5f5f5ab',
};

const headerRowStyle = {
    backgroundColor: '#deb5b545',
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    // Conditionally apply styles based on isHeader prop
    const style = isHeader ? headerRowStyle : rowStyle;

    if (isHeader) {
        if (!textSecondCell) {
            return (
                <tr className="course-list-header" style={style}>
                    <th colSpan={2}>{textFirstCell}</th>
                </tr>
            );
        } else {
            return (
                <tr className="course-list-header" style={style}>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            );
        }
    } else {
        return (
            <tr className="course-list-data" style={style}>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool.isRequired,
    textFirstCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
