import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "../Config/config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = {
        googleLogin
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
    },[])

    console.log(user);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;