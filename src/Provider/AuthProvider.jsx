import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Config/config";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading,setLoading] = useState(true);

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin = () =>{
        return signInWithPopup(auth,githubProvider);
    }
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const handleUpdateProfile = (name,image) =>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }
    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logout =()=>{
        toast.success('Log out successful');
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        googleLogin,
        githubLogin,
        createUser,
        handleUpdateProfile,
        login,
        logout
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })

        return ()=> unSubscribe();
    },[])

    // console.log(user);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;