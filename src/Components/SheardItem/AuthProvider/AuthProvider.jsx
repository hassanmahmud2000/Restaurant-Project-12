import React, { createContext, useEffect, useState } from 'react';
import auth from './../../../MainRoot/FireBase/Fire';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState([]);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const SignOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser)
            }
    },[auth])})

    const authInfo ={createUser , user ,SignOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;