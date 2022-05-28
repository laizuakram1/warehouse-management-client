import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import googleIcon from '../../images/google/google.png';
import { auth } from '../../firebase.init';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const provider = new GoogleAuthProvider();




const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/')
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                navigate('/')
                console.log(user);


                // ...
            }).catch((error) => {
                const err = error.message;
                console.log(err);
                // ...
            });
    }


    return (
        <div className='form-box'>
            <form onSubmit={handleLogin}>
                <h2 className='form-title'>Login</h2>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>

                <div className='input-group'>
                    <label htmlFor="email">Password</label>
                    <input type="password" name="password" />
                </div>
                <p className='text-danger'>{error}</p>
                <input className='form-submit' type="submit" value="Login" />
                <p>New to Lab care? <Link className='form-link' to='/signup'>Create an account</Link></p>
                <br />
                <div className='or-section'>
                    <div className='line'></div>
                    <p>or</p>
                    <div className='line'></div>
                </div>
                <Button className='googleAuth-Button' onClick={googleAuth}>
                    <img src={googleIcon} alt="" />
                    continue with google</Button>

            </form>
        </div>

    );
};

export default Login;