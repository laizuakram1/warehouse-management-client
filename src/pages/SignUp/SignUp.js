
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useTooken from '../../Hooks/useToken';
import googleIcon from '../../images/google/google.png';
import './SignUp.css';


const provider = new GoogleAuthProvider();


const SignUp = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const {user, setUser} = useState('');
    const {gUser,setGuser} = useState('');
    const {token} = useTooken(user || gUser); 

    const handleSignup = (event) => {
        event.preventDefault();
        const userEmail = event.target.email.value;
        const userPassword = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
       

        createUserWithEmailAndPassword(auth, userEmail, userPassword, confirmPassword)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                if(token){
                    navigate('/')
                }
            })
            .catch((error) => {
                setError(error.message);
                // ..
            });

    }

    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const gUser = result.user;
                setGuser(gUser);
                if(token){
                    navigate('/')
                }
               
                // ...
            }).catch((error) => {
                const err = error.message;
                console.log(err);
                // ...
            });
    }


    return (
        <div className='form-box'>
            <form onSubmit={handleSignup}>
                <h2 className='form-title'>SignUp</h2>
                <div className='input-group'>
                    <label htmlFor="email">Your Email</label>
                    <input type="text" name="email" />
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <div className='input-group'>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name="confirmPassword" />
                    <p className='text-danger mt-3' >{error}</p>
                </div>
                <Button className='form-submit' type="submit">SignUp</Button>

                <p>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
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

export default SignUp;