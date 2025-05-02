import React, { useEffect, useState } from 'react';
import { AuthContext } from './Authcontext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    
    const createUser =(email, passowrd)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, passowrd)
    }

    const loginUser = (email,passowrd)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, passowrd)
    }
    
    const signOutUser = ()=>{
        setLoading(true)
        signOut(auth)
    }

    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log("Current User:",currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    
    const userInfo = {
        user,
        loading,
        createUser,
        loginUser,
        signOutUser,
        googleSignIn
    }

    return (
        <div>
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;