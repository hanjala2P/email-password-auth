// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_mAK_etCLlgFNd_IBWQ3XwdYvP8hYuv4",
  authDomain: "email-password-auth-c691d.firebaseapp.com",
  projectId: "email-password-auth-c691d",
  storageBucket: "email-password-auth-c691d.firebasestorage.app",
  messagingSenderId: "258568296326",
  appId: "1:258568296326:web:0914c68d4ccd7e1f2b3e07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);