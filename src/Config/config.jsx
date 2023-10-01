// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABEu6L9gkdRdobNvmt0zk4BF6uXGtWx6g",
  authDomain: "react-glasses-26a1b.firebaseapp.com",
  projectId: "react-glasses-26a1b",
  storageBucket: "react-glasses-26a1b.appspot.com",
  messagingSenderId: "562154708936",
  appId: "1:562154708936:web:9b745ae5cb778ef11a2afd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);