// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_5BBleLbfsqzeZmeuwaao7Y2OXwy4Flg",
    authDomain: "assignment-10-1507a.firebaseapp.com",
    projectId: "assignment-10-1507a",
    storageBucket: "assignment-10-1507a.appspot.com",
    messagingSenderId: "966401041003",
    appId: "1:966401041003:web:db42c87e458e81054b472e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;