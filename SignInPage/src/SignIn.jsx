import React from 'react';
import { Link } from 'react-router-dom';
import './Sign.css';

const SignIn =()=> {
    return(
        <div className="signin wrapper">
            <h2>Sign In</h2>
            <form action="#">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder='Password'/>
                <button type='submit'>Sign In</button>
            </form>
            <div className="signin-links">
                <Link to="/forgot-password">Forgot Password?</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
};
export default SignIn;