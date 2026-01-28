import React, { useContext } from 'react'
import Navbar from '../Components/Header/Navbar'
import { Link, Navigate, useNavigate } from 'react-router'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { auth } from '../firebase.init';

export default function Login() {
    const navigate = useNavigate();
    const {signIn} = useContext(AuthContext);
    const handleLogin=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Debug: Check if values are being captured
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Validate before sending
    if (!email || !password) {
        console.error('Email or password is empty');
        return;
    }

        signIn(email, password)
        .then(result => {
            navigate('/')
        })
        .catch(error => {
            // Log the complete error object
            console.log('Full Error Object:', error);
            console.log('Error Code:', error.code);
            console.log('Error Message:', error.message);
            alert('credential wrong');
        });
    }
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>


            <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-3xl font-bold mx-auto pt-5">Login now!</h1>

                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required/>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 w-full">Login</button>
                    </form>
                    <p>New to this website? <Link className='text-blue-500 unerline' to='/register'>Create Account</Link></p>
                </div>
            </div>
            <p className='text-center mt-5'>------------------------ or ------------------------</p>
            <div className='flex justify-center mt-5'>
                <button className="text-center btn bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>
            </div>
        </div>

    )
}
