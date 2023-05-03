// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6A_2NUsNA1UzD5GA9clE8xRDOKWj09jo",
  authDomain: "recepi-hunter-client.firebaseapp.com",
  projectId: "recepi-hunter-client",
  storageBucket: "recepi-hunter-client.appspot.com",
  messagingSenderId: "780464234426",
  appId: "1:780464234426:web:7263f1c5b9d92f431a0783"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
