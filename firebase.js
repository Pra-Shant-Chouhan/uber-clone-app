// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFnTPzrxCzZzFJTqEhnQ_z_4VonoYUY5A",
  authDomain: "uber-clone-app-69ae4.firebaseapp.com",
  projectId: "uber-clone-app-69ae4",
  storageBucket: "uber-clone-app-69ae4.appspot.com",
  messagingSenderId: "827837367670",
  appId: "1:827837367670:web:a3432f2674411be6112657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };