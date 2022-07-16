// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0Z8X9aaMkIFYazSgcoVsOKRLrdO90PRs",
  authDomain: "trial-quiz-d96ba.firebaseapp.com",
  projectId: "trial-quiz-d96ba",
  storageBucket: "trial-quiz-d96ba.appspot.com",
  messagingSenderId: "134355121873",
  appId: "1:134355121873:web:f12dc49204426f0c5e37f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
