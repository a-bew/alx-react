import logo from '../assets/holberton-logo.jpg';
import React from 'react'
import { StyleSheet, css } from 'aphrodite';
import { CSSVariables } from '../CssVariables/CssVariables';

const styles = StyleSheet.create({
    appHeader: {
        fontSize: '1.4rem',
        color: 'red',

        flex: '0 0 100%',
        minHeight: '200px',
        display: 'flex',
        gap: '0px',
        alignItems: 'center',
        padding: '0px',

        [`@media (max-width: ${CSSVariables.mobileMaxWidth})`]: {
            marginTop: '30px',
            width: 'content-fit',
            fontSize: '0.9rem',
            display: 'flex',
            gap: '2px',
            justifyContent: 'center',
        },

    },
    h1: {
        fontSize: '60px',
    },
    img: {
        width: '150px',
        marginLeft: '35px',
    },
});



const Header = () => {
    return (
        <div className={css(styles.appHeader)}>
            <img src={logo} className={css(styles.img)} alt="logo" />
            <h1 className={css(styles.h1)}>School dashboard</h1>
        </div>
    );
};



export default Header