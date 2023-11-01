import React from 'react';
import './CourseListRow.css'; // Import the CSS file

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    if (isHeader) {
        if (!textSecondCell) {
            return (
                <tr className="course-list-header"> {/* Apply the CSS class conditionally */}
                    <th colSpan={2}>{textFirstCell}</th>
                </tr>
            );
        } else {
            return (
                <tr className="course-list-header"> {/* Apply the CSS class conditionally */}
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            );
        }
    } else {
        return (
            <tr className="course-list-data"> {/* Apply the CSS class conditionally */}
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    }
}

export default CourseListRow;
