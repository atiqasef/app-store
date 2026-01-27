import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import logo from '/APP.png'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.init';
export default function Navbar() {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut=()=>{
      signOut(auth)
      .then(result=>{
        alert('LogOut Successful')
      })
      .catch(error=>{
        console.log(error);
      })
  }
  const links = <>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='/apps'>Apps</NavLink></li>
  <li><NavLink to='/blog'>Blog</NavLink></li>
  <li><NavLink to='/aboutus'>About Us</NavLink></li>
  <li><NavLink to='/support'>Support</NavLink></li>
  <li><NavLink to='/myprofile'>My Profile</NavLink></li>
  </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <img className='w-40' src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
    {user? <div onClick={handleLogOut} className="btn btn-primary">LogOut</div> : <NavLink to='/login'><div className="btn btn-primary">LogIn</div></NavLink>}
    
  </div>
</div>
  )
}
