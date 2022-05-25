// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw8cU7juKTUExO2Cpr9SRE19nqnu26CHU",
  authDomain: "labcare-international-1853a.firebaseapp.com",
  projectId: "labcare-international-1853a",
  storageBucket: "labcare-international-1853a.appspot.com",
  messagingSenderId: "235101239863",
  appId: "1:235101239863:web:c85d8c8b7b55fe1ac75db2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;