import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: `{FIREBASE_API_KEY}`,
    authDomain: "react-portfolio-e0d85.firebaseapp.com",
    projectId: "react-portfolio-e0d85",
    storageBucket: "react-portfolio-e0d85.appspot.com",
    messagingSenderId: "249047522356",
    appId: "1:249047522356:web:b1fca6efb2c0295ebabe61",
    measurementId: "G-90TNJ3ZYKT"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

// Shut up ES-Lint
console.log(analytics);