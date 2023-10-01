import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Config/config";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logout =()=>{
        toast.success('Log out successful');
        return signOut(auth);
    }

    const authInfo = {
        user,
        googleLogin,
        createUser,
        logout
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(currentUser)=>{
            console.log("observer ", currentUser);
            setUser(currentUser);
        })
    },[])

    // console.log(user);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;