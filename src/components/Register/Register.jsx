import React from 'react';
import { Link } from 'react-router';

const Register = () => {

    const handleRegister = (e)=>{
        e.preventDefault()

        const name = e.target.name.value 
        const email = e.target.email.value 
        const password = e.target.password.value 

        console.log(name,email,password)
    }

    return (
        <div className="card mx-auto mt-5 p-5 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-3xl text-center font-bold">Sign Up now!</h3>
            <div className="card-body">
                <form className="fieldset" onSubmit={handleRegister}>
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Enter your name" name='name' />
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Enter your Email" name='email'/>
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password'/>
                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </form>
                <p>Already have an account? <Link to="/login" className='text-blue-500 underl;ine'>Log In</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;