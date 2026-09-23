// Paste your Firebase web app config here.
// Firebase console → Project settings → Your apps → Web app → "SDK setup and configuration" → Config.
// (These values are not secret. Your Firestore rules protect the data.)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzKBuWEjXnqqcLcTF6FV6FguMawZSMGrc",
  authDomain: "studytimer-274df.firebaseapp.com",
  projectId: "studytimer-274df",
  storageBucket: "studytimer-274df.firebasestorage.app",
  messagingSenderId: "300779046480",
  appId: "1:300779046480:web:4207386eb6f6389c5e3355",
  measurementId: "G-6Z4N728HVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
