import React, { createContext, useEffect, useState } from 'react';
import auth from './../../../MainRoot/FireBase/Fire';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import AxiosPublic from '../../Hook/AxiosPublic';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const axiosPublic = AxiosPublic()
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
            setUser(currentUser)
            if(currentUser){
                const userInfo = {email : currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                    .then(res=>{
                        if(res.data.token){
                            localStorage.setItem('AccessToken',res.data.token)
                        }
                    })
                //TODO: Take Token 
                
                setLoading(false)
            }
            else{
                // Do Something
                localStorage.removeItem('AccessToken')
            }
    },[auth , axiosPublic])})

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