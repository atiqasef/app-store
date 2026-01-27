import React, { useContext } from 'react'
import Navbar from '../Components/Header/Navbar'
import { Link } from 'react-router'
import { AuthContext, provider } from '../AuthProvider/AuthProvider'

export default function Register() {
    const {googleSignIn, setUser,  createUser} = useContext(AuthContext);
    const handleRegistration = (e) =>{
            e.preventDefault();
               const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
         createUser(email,password)
         .then(result=>{

         })
         .catch(error=>{
            
         })
    }
    const handleRegister = () => {
        
     
        googleSignIn(provider)
        .then(result=>{
            const user = result.user;
           
            console.log(user)
        })
        .catch(error=>{

        })
    }
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>


            <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-3xl font-bold mx-auto pt-5">Register now!</h1>

                <div className="card-body">
                    <form onSubmit={handleRegistration}>
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo Url" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 w-full">Register</button>
                    </form>
                    <p>Already have an account? <Link className='text-blue-500 unerline' to='/login'>Login</Link></p>
                </div>
            </div>
            <p className='text-center mt-5'>------------------------ or ------------------------</p>
            <div className='flex justify-center mt-5'>
                <button onClick={handleRegister} className="text-center btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
        </div>
    )
}
