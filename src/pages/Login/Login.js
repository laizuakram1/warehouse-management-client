import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
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
                <p>Already have an account? <Link className='form-link' to='/signup'>SignUp</Link></p>
            </form>
        </div>
    );
};

export default Login;