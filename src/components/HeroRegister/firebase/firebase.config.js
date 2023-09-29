// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHez1je7UnnxqxR2CkGJPptJ0SEWd_KN8",
  authDomain: "user-email-password-auth-13c5d.firebaseapp.com",
  projectId: "user-email-password-auth-13c5d",
  storageBucket: "user-email-password-auth-13c5d.appspot.com",
  messagingSenderId: "155034234032",
  appId: "1:155034234032:web:745dea110f7b1d7f925f75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;