// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwizwyYUyTiOQO5JWSL7NR4o9cDT9zRFE",
    authDomain: "fitness-club-875a4.firebaseapp.com",
    projectId: "fitness-club-875a4",
    storageBucket: "fitness-club-875a4.appspot.com",
    messagingSenderId: "975225804610",
    appId: "1:975225804610:web:08fadd8737e445acf21adb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;