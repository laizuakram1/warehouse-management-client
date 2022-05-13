import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='form-container'>
            <form>
                <h2 className='form-title'>SignUp</h2>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className='input-group'>
                    <label htmlFor="email">Password</label>
                    <input type="password" name="password" />
                </div>
                <div className='input-group'>
                    <label htmlFor="email">Confirm Password</label>
                    <input type="password" name="confirm-password" />
                </div>
                <input className='form-submit' type="submit" value="Sign-Up" />
                <p>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;