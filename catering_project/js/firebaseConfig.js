// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYvV7APwnfTBjvRk6hFg_pwSg0RbURThI",
  authDomain: "catering-system-9b47d.firebaseapp.com",
  projectId: "catering-system-9b47d",
  storageBucket: "catering-system-9b47d.firebasestorage.app",
  messagingSenderId: "244332640890",
  appId: "1:244332640890:web:7ae776083bf9e8b25b19c3",
  measurementId: "G-7E1EEE9X09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
