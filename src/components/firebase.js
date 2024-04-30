import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: `{FIREBASE_API_KEY}`,
    authDomain: `{FIREBASE_AUTH_DOMAIN}`,
    projectId: `{FIREBASE_PROJECT_ID}`,
    storageBucket: `{FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `{FIREBASE_MESSAGING_SENDER_ID}`,
    appId: `{FIREBASE_APP_ID}`,
    measurementId: `{FIREBASE_MEASUREMENT_ID}`
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

// Shut up ES-Lint
console.log(analytics);
console.log(firestore);