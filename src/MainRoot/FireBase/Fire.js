// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBas0E6ZTbH2DOmefUqQRSsBEufqmVsWSM",
  authDomain: "restaurant-project-6ee67.firebaseapp.com",
  projectId: "restaurant-project-6ee67",
  storageBucket: "restaurant-project-6ee67.appspot.com",
  messagingSenderId: "246757791071",
  appId: "1:246757791071:web:e509839e64763b88cd92ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;