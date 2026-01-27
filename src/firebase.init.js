// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRtR9-xXPj2gXloMd88BPyVrrZ44MpFJc",
  authDomain: "app-store-33d38.firebaseapp.com",
  projectId: "app-store-33d38",
  storageBucket: "app-store-33d38.firebasestorage.app",
  messagingSenderId: "367259010223",
  appId: "1:367259010223:web:b7438694f04ab10417405a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);