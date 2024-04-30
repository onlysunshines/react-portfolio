import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: `{FIREBASE_API_KEY}`,
    authDomain: "react-portfolio-e0d85.firebaseapp.com",
    projectId: "react-portfolio-e0d85",
    storageBucket: "react-portfolio-e0d85.appspot.com",
    messagingSenderId: "249047522356",
    appId: `{FIREBASE_APP_ID}`,
    measurementId: `{FIREBASE_MEASUREMENT_ID}`
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

// Shut up ES-Lint
console.log(analytics);