import React from 'react';
import PropTypes from 'prop-types';
import { CSSVariables } from '../CssVariables/CssVariables';
import { StyleSheet, css } from 'aphrodite';

// Define constants for row styles
const rowStyle = {
    // backgroundColor: '#f5f5f5ab',
};

const headerRowStyle = {
    backgroundColor: '#deb5b545',
};

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
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    // Conditionally apply styles based on isHeader prop

    // Conditionally apply styles based on isHeader prop
    const rowStyle = isHeader ? styles.headerRow : styles.row;
    const thStyle = isHeader ? styles.headerTh : styles.dataTh;


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
            <tr className={css(styles.row)} style={rowStyle}>
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