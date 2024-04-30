import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAO3RymFYZ-N7zNl7HuFuO38zB24gT8c1U",
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

// Shut up ES-Lint
console.log(analytics);