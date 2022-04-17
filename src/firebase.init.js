import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA_5BBleLbfsqzeZmeuwaao7Y2OXwy4Flg",
    authDomain: "assignment-10-1507a.firebaseapp.com",
    projectId: "assignment-10-1507a",
    storageBucket: "assignment-10-1507a.appspot.com",
    messagingSenderId: "966401041003",
    appId: "1:966401041003:web:db42c87e458e81054b472e"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;