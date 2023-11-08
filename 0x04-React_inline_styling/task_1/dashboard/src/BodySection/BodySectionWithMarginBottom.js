import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

const BodySectionWithMarginBottom = (props) => {
    return (
        <div className={css(styles.bodySectionWithMargin)}>
            <BodySection {...props} />
        </div>
    );
};

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px',
    },
});

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default BodySectionWithMarginBottom;
