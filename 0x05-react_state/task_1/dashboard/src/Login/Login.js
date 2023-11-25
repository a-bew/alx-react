import React, { Fragment, useState } from 'react'
import { StyleSheet, css } from 'aphrodite';
import { CSSVariables } from '../CssVariables/CssVariables';

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
    mobile: {
        [`@media (maxWidth: ${CSSVariables.mobileMaxWidth})`]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.5em',
        },
    },
    h2: {
        fontSize: '2rem'
    }
});


const Login = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enableSubmit, setEnableSubmit] = useState(false);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    };

    handleLoginSubmit = () => {
        setIsLoggedIn(true)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        if (email != '' && password != '') {
            setEnableSubmit(true);
        } else {
            if (enableSubmit != false) {
                setEnableSubmit(false);
            }
        }
    }, [email, password]);

    return (
        <Fragment>
            <h2 className={css(styles.h2)}>
                Login to access the full dashboard</h2>
            <form className={css(styles.formInputs, styles.mobile)} onSubmit={handleLoginSubmit}>
                <section className={css(styles.input)}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={email} onChange={handleChangeEmail} />
                </section>
                <section className={css(styles.input)}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" value={password} onChange={handleChangePassword} />
                </section>
                <input type='submit' disabled={!enableSubmit}>OK</input>
            </form>
            <h2 className={css(styles.h2)}>
                New From The School</h2>
            <p>loreLabore sint velit excepteur duis ut. Do deserunt ad eiusmod ut cupidatat minim tempor. Mollit duis ut sit voluptate ipsum adipisicing do. Irure voluptate cupidatat non veniam proident. In quis nostrud sint sint labore veniam deserunt commodo velit tempor et. Incididunt eiusmod excepteur tempor sint pariatur tempor cupidatat.

                Sit occaecat anim nisi veniam duis qui officia. Laboris Lorem minim veniam culpa ea ad tempor aliquip. Aliquip mollit elit non voluptate do dolore nisi incididunt sunt elit. Laboris ut aliquip proident elit eu culpa aliquip veniam commodo. Duis culpa in aliquip et. Excepteur veniam quis laborum ad nulla excepteur magna. Do incididunt irure minim elit mollit mollit officia do sint do.


                Amet et ipsum irure ullamco ullamco sit. Ut enim ea tempor in incididunt consectetur. Quis veniam duis minim et pariatur occaecat ad incididunt proident laboris anim. Elit officia sunt officia id dolore aute occaecat eu et. Magna ut mollit tempor aliqua. Enim et ad laborum quis non Lorem amet elit cupidatat reprehenderit mollit. Ex nulla proident irure non non aute tempor minim sunt est velit eu.</p>
        </Fragment>
    );
};

export default Login