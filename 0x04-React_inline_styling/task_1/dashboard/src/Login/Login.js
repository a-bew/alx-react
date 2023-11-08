import React, { Fragment } from 'react'
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
    return (
        <Fragment>
            <p>Login to access the full dashboard</p>
            <section className={css(styles.formInputs)}>
                <section className={css(styles.input)}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" />
                </section>
                <section className={css(styles.input)}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" />
                </section>
                <button>OK</button>
            </section>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    formInputs: {
        display: 'flex',
        gap: '2em',
        alignItems: 'center',
    },
    input: {
        input: {
            height: '1.4rem',
            marginLeft: '10px',
        },
    },
});

export default Login