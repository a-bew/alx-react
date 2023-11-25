import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSVariables } from '../CssVariables/CssVariables';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    row: {
        backgroundColor: CSSVariables.backgroundColor,
    },
    headerRow: {
        backgroundColor: CSSVariables.backgroundColor,
    },
    headerTh: {
        fontWeight: 'bold',
        // Add any other styles for header th elements
    },
    dataTh: {
        fontWeight: 'bold',
        // Add any other styles for data th elements
    },
    rowChecked: {
        backgroundColor: '#e6e4e4',
    },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    // Conditionally apply styles based on isHeader prop
    const [isChecked, setIsChecked] = useState(false);

    // Conditionally apply styles based on isHeader prop
    const rowStyle = isHeader ? styles.headerRow : isChecked ? styles.rowChecked : styles.row;
    const thStyle = isHeader ? styles.headerTh : styles.dataTh;

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    if (isHeader) {
        if (!textSecondCell) {
            return (
                <tr className={css(styles.headerRow)} style={rowStyle}>
                    <th colSpan={2} className={css(thStyle)}>
                        {textFirstCell}
                    </th>
                </tr>
            );
        } else {
            return (
                <tr className={css(styles.headerRow)} style={rowStyle}>
                    <th className={css(thStyle)}>{textFirstCell}</th>
                    <th className={css(thStyle)}>{textSecondCell}</th>
                </tr>
            );
        }
    } else {
        return (
            <tr className={css(rowStyle)} style={rowStyle}>
                <td className={css(thStyle)}>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    {textFirstCell}
                </td>
                <td className={css(thStyle)}>{textFirstCell}</td>
                <td className={css(thStyle)}>{textSecondCell}</td>
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