import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAPklUKM7e9fxV-50WhQglToe_Gq_IZpOQ",
  authDomain: "solosphere-firebase.firebaseapp.com",
  projectId: "solosphere-firebase",
  storageBucket: "solosphere-firebase.appspot.com",
  messagingSenderId: "270293735074",
  appId: "1:270293735074:web:28e0b6e1a2fa922cb269fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
