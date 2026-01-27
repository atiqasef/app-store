import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase.init';
export const AuthContext = createContext();
export const provider = new GoogleAuthProvider();
export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unSubscribe()
        }
    }, [])
    const authData = {
        user,
        setUser,
        googleSignIn,
        logOut,
        signIn,
        createUser
    }
    return <AuthContext.Provider value={authData} >
        {children}
    </AuthContext.Provider>
}
