
// ========== Data Base ========== //

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDV4nl1i4nuqFUQJKOS-i8gG4xZ40YY4XE",
    authDomain: "owsla-8020a.firebaseapp.com",
    databaseURL: "https://owsla-8020a-default-rtdb.firebaseio.com",
    projectId: "owsla-8020a",
    storageBucket: "owsla-8020a.appspot.com",
    messagingSenderId: "64367481599",
    appId: "1:64367481599:web:6f1b479f8eabf0eba4f2ca",
    measurementId: "G-PQ72V6PM3D"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)
export const storage = getStorage(app);


/*------------------------------------------ */