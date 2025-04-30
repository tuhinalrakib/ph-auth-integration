import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/Authcontext';

const Login = () => {
    const userInfo = use(AuthContext)
    const {loginUser} = userInfo

    const handleLogin = (e)=>{
        e.preventDefault()
        const email = e.target.email.value 
        const password = e.target.password.value 
        console.log(email, password)
        loginUser(email, password)
        .then(res=>console.log(res.user))
        .catch(e=>console.log(e.message))
    }


    return (
        <div className="card mx-auto mt-5 p-5 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-3xl text-center font-bold">Login now!</h3>
            <div className="card-body">
                <form className="fieldset" onSubmit={handleLogin}>
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name='email'/>
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password'/>
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>Don't have an account? <Link to="/register" className='text-blue-500 underl;ine'>Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;