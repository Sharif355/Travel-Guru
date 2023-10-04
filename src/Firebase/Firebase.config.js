// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBI472ARELWVfPUsb5vh6eYQZD_BHbZ7Hw",
    authDomain: "react-tourism-guru.firebaseapp.com",
    projectId: "react-tourism-guru",
    storageBucket: "react-tourism-guru.appspot.com",
    messagingSenderId: "1094328609906",
    appId: "1:1094328609906:web:82a21cac0c386d4a3026eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;