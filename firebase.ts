// 1. Import the necessary functions from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 2. IMPORTANT: Replace this with the firebaseConfig object you copied from the Firebase console
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA15xjWy7KYj0yYDM6yavkHwmr7UFWpIXA",
  authDomain: "ailab-498f1.firebaseapp.com",
  projectId: "ailab-498f1",
  storageBucket: "ailab-498f1.firebasestorage.app",
  messagingSenderId: "601302470469",
  appId: "1:601302470469:web:510e3cc9266a6dcf3d782c",
  measurementId: "G-C9CL580EP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);

// 4. Get a reference to the Firestore database service and export it
export const db = getFirestore(app);