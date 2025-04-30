import React, { useEffect, useState } from 'react';
import { AuthContext } from './Authcontext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    
    const createUser =(email, passowrd)=>{
        return createUserWithEmailAndPassword(auth, email, passowrd)
    }

    const loginUser = (email,passowrd)=>{
        return signInWithEmailAndPassword(auth, email, passowrd)
    }

    const signOutUser = ()=>{
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log("Current User:",currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    
    const userInfo = {
        user,
        createUser,
        loginUser,
        signOutUser
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