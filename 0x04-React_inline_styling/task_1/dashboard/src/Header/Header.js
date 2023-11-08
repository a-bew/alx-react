import logo from '../assets/holberton-logo.jpg';
import React from 'react'
import { StyleSheet, css } from 'aphrodite';


const Header = () => {
    return (
        <div className={css(styles.appHeader)}>
            <img src={logo} className={css(styles.img)} alt="logo" />
            <h1 className={css(styles.h1)}>School dashboard</h1>
        </div>
    );
};


const styles = StyleSheet.create({
    appHeader: {
        flex: '0 0 100%',
        minHeight: '200px',
        display: 'flex',
        gap: '50px',
        alignItems: 'center',
        padding: '0px',
    },
    h1: {
        fontSize: '60px',
    },
    img: {
        width: '150px',
        marginLeft: '35px',
    },
});


export default Header