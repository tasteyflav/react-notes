import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBKL-5fYKQtswLxyY1rFTnUWZ_S139crCo",
  authDomain: "react-notes-4f158.firebaseapp.com",
  projectId: "react-notes-4f158",
  storageBucket: "react-notes-4f158.appspot.com",
  messagingSenderId: "743163037372",
  appId: "1:743163037372:web:6544a3d10fead17540b2b9",
  measurementId: "G-Z223G5FTS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);