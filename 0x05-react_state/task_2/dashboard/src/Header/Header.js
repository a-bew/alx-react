import { useContext } from 'react'
import logo from '../assets/holberton-logo.jpg';
import React from 'react'
import { StyleSheet, css } from 'aphrodite';
import { CSSVariables } from '../CssVariables/CssVariables';
import { AppContext } from '../App/AppContext';

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

        [`@media (maxWidth: ${CSSVariables.mobileMaxWidth})`]: {
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

    const { user, logOut } = useContext(AppContext);

    return (
        <>
            <div className={css(styles.appHeader)}>
                <img src={logo} className={css(styles.img)} alt="logo" />
                <h1 className={css(styles.h1)}>School dashboard</h1>
            </div>
            {
                user.isLoggedIn && <section id="logoutSection">
                    <h2>Welcome<strong> {user.email} </strong><em><a href="#" onClick={logOut}>(logout)</a></em>
                    </h2>
                </section>
            }
        </>
    );
};



export default Header