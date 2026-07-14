// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRBASE_API_KEY,
  authDomain: "vedsid-ai.firebaseapp.com",
  projectId: "vedsid-ai",
  storageBucket: "vedsid-ai.firebasestorage.app",
  messagingSenderId: "790249353514",
  appId: "1:790249353514:web:cb2488d497f46f75aaee53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export {auth, provider}