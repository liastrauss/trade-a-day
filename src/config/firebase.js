// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {FacebookAuthProvider, getAuth, GoogleAuthProvider} from "firebase/auth"
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-QOwLD4insLSu2zJdJPOJpxfvPvCrAdg",
    authDomain: "trade-a-day.firebaseapp.com",
    projectId: "trade-a-day",
    storageBucket: "trade-a-day.appspot.com",
    messagingSenderId: "163137688907",
    appId: "1:163137688907:web:8badfdfd800ceeb61c04ce",
    measurementId: "G-LHTES2X9SJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage= getStorage(app)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()


