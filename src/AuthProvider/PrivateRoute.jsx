import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router';

export default function PrivateRoute({ children }) {
    const {user} = useContext(AuthContext);
    if(user && user.email){
        return children
    }
    return <Navigate to='/login'></Navigate>
}
