// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQFdTQRaR8Un3lOiMtKapHVwK0z4gQ_so",
  authDomain: "immigration-service-auth.firebaseapp.com",
  projectId: "immigration-service-auth",
  storageBucket: "immigration-service-auth.appspot.com",
  messagingSenderId: "112858660144",
  appId: "1:112858660144:web:de1054f865242b445cdcf5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
