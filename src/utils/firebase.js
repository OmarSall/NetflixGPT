// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSBbP4-V9svgFT7qOWmOHiWqSL5Oz5Lqc",
    authDomain: "netflixgpt-afb7f.firebaseapp.com",
    projectId: "netflixgpt-afb7f",
    storageBucket: "netflixgpt-afb7f.firebasestorage.app",
    messagingSenderId: "513114601176",
    appId: "1:513114601176:web:0644f9d32868a7c227c9ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);