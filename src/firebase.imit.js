import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUnT1QD7HwAoQ9W54H1HlEHxFXh46ebzE",
  authDomain: "immigration-da701.firebaseapp.com",
  projectId: "immigration-da701",
  storageBucket: "immigration-da701.appspot.com",
  messagingSenderId: "1031098984663",
  appId: "1:1031098984663:web:b42df61d912ac463972892",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
