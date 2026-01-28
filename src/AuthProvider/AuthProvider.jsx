import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase.init';
export const AuthContext = createContext();
export const provider = new GoogleAuthProvider();
export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const updateUser = (updateData) =>{
        return updateProfile(auth.currentUser, updateData);
    }
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe()
        }
    }, [])
    const authData = {
        user,
        loading,
        setUser,
        googleSignIn,
        logOut,
        signIn,
        createUser,
        updateUser
    }
    return <AuthContext.Provider value={authData} >
        {children}
    </AuthContext.Provider>
}
