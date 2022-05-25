import React from 'react';
import { Button } from 'react-bootstrap';
import { auth } from '../../firebase.init';
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { Link } from 'react-router-dom';

const provider = new GoogleAuthProvider();

const Login = () => {
    const googleAuth = ()=>{
        signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
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
            <form>
                <h2 className='form-title'>Login</h2>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>

                <div className='input-group'>
                    <label htmlFor="email">Password</label>
                    <input type="password" name="password" />
                </div>
                <input className='form-submit' type="submit" value="Login" />
                <p>New to Lab care? <Link className='form-link' to='/signup'>Create an account</Link></p>
                <br />
                <Button onClick={googleAuth}>continue with google</Button>
            </form>
        </div>
    );
};

export default Login;