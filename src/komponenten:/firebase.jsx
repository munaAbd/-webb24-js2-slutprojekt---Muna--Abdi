import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "DIN_API_KEY",
  authDomain: "DITT_PROJECT.firebaseapp.com",
  projectId: "DITT_PROJECT_ID",
  storageBucket: "DITT_PROJECT.appspot.com",
  messagingSenderId: "DITT_MESSAGING_SENDER_ID",
  appId: "DITT_APP_ID"
};

// Initiera Firebase
const app = initializeApp(firebaseConfig);

// Initiera Firestore (för databas)
const db = getFirestore(app);

export { db };