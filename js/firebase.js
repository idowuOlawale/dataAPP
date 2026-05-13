import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: import.meta.env?.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
authDomain: import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN || "YOUR_DOMAIN",
projectId: import.meta.env?.VITE_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
storageBucket: import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET || "YOUR_BUCKET",
messagingSenderId: import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID || "SENDER_ID",
appId: import.meta.env?.VITE_FIREBASE_APP_ID || "APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
