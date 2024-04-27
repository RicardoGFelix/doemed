// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbDSsHvq7tPw4SRCWL9mr-2N81LF4F6jg",
  authDomain: "doemed-c7ff6.firebaseapp.com",
  projectId: "doemed-c7ff6",
  storageBucket: "doemed-c7ff6.appspot.com",
  messagingSenderId: "951811757160",
  appId: "1:951811757160:web:264d0c538340d6f76b97dd",
  measurementId: "G-M8GLJGV6QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { app, analytics, firestore };