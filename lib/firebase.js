// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArNUO1ii0U45SNvqeVrhtoLTDhf8S-bwU",
  authDomain: "sepideh-george.firebaseapp.com",
  projectId: "sepideh-george",
  storageBucket: "sepideh-george.appspot.com",
  messagingSenderId: "1010589377016",
  appId: "1:1010589377016:web:07bdeb7696dd6d4e95b60d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);