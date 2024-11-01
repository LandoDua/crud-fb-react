// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIxAbnwHIN6cAX3mP9CKzNrN5FGlgvIuI",
    authDomain: "crud-fire-react-od.firebaseapp.com",
    databaseURL: "https://crud-fire-react-od-default-rtdb.firebaseio.com",
    projectId: "crud-fire-react-od",
    storageBucket: "crud-fire-react-od.appspot.com",
    messagingSenderId: "902693117936",
    appId: "1:902693117936:web:930f011451ecd4bc718735",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)
