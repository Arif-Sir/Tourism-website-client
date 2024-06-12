/* eslint-disable react/prop-types */
// import React from 'react';

import { GoogleAuthProvider,createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";



export const Authcontext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('dekhi currentUser ailo kina', currentUser);
            setUser(currentUser);
            setLoading(false);
            
        })
        return () => { unSubscribe(); }
    }, [])

    const authInfo = {
        user,
        loading,
        creatUser,
        signInUser,
        signInGoogle,
        logOut,
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;