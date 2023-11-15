import React, { createContext, useEffect, useState } from 'react';
import auth from './../../../MainRoot/FireBase/Fire';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const provider = new GoogleAuthProvider()

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const profileInfo = ({name , photo})=>{
       return updateProfile(auth.currentUser, {
            displayName:name, photoURL: photo
          })
          
    }
    const GoogleSignUp =(value)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const SignOut = (value)=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
            }
    },[auth])})

    const authInfo ={
        createUser,
        loading , 
        user ,
        SignOut,
        GoogleSignUp,
        profileInfo
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;