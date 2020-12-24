import React from 'react';
import { Button } from '@material-ui/core';

import './Login.css';
import { auth, provider } from '../firebase/firebase';

const Login = () => {
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/233px-Discord_logo.svg.png" alt="discord"/>
            </div>
            <Button onClick={signIn}>Sign In With Google</Button>
        </div>
    )
}

export default Login
