// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCsFWI9dQF6yDNMtKqaWvhRw_yInazyphI",
    authDomain: "finalbackend-13333.firebaseapp.com",
    projectId: "finalbackend-13333",
    storageBucket: "finalbackend-13333.appspot.com",
    messagingSenderId: "138043324266",
    appId: "1:138043324266:web:3b8f95ecafb3c27cc29713",
    measurementId: "G-69G9XKLLE5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const storage = getStorage(app);
export const db = getFirestore(app);

