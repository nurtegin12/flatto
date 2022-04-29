// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_hBXe9b-AfRqJ1iMFLOZmp824YfQel18",
  authDomain: "flatto-2177a.firebaseapp.com",
  projectId: "flatto-2177a",
  storageBucket: "flatto-2177a.appspot.com",
  messagingSenderId: "380338042954",
  appId: "1:380338042954:web:50a5ab401503d51b60ceb3",
  measurementId: "G-Y8QDL8M78Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
