import { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/Authcontext';
// import { createUserWithEmailAndPassword } from "firebase/auth"
// import { auth } from '../../firebase/firebase.init';



const Register = () => {

    const userInfo = use(AuthContext)

    const { createUser } = userInfo

    const handleRegister = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(name, email, password)
        createUser(email, password).then(res => console.log(res.user)).catch(e => console.log(e.message))
    }

    return (
        <div className="card mx-auto mt-5 p-5 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-3xl text-center font-bold">Create Account now!</h3>
            <div className="card-body">
                <form className="fieldset" onSubmit={handleRegister}>
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Enter your name" name='name' />
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Enter your Email" name='email' />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password' />
                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </form>
                <p>Already have an account? <Link to="/login" className='text-blue-500 underl;ine'>Log In</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;