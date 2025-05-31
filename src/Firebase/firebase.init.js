// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4txbO92BU9OUfpX9VzMs3lj0xoW6SPA8",
  authDomain: "coffee-store-app-c6948.firebaseapp.com",
  projectId: "coffee-store-app-c6948",
  storageBucket: "coffee-store-app-c6948.firebasestorage.app",
  messagingSenderId: "848720698040",
  appId: "1:848720698040:web:5d42d452fca3c4307a324d",
  measurementId: "G-2WZYSRMNM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);