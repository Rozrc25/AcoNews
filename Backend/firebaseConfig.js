// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5tL7HO5-Ydf2MGGR5cv4xQSBLLvlpCCA",
  authDomain: "aconews-8a87a.firebaseapp.com",
  projectId: "aconews-8a87a",
  storageBucket: "aconews-8a87a.appspot.com",
  messagingSenderId: "984706408917",
  appId: "1:984706408917:web:fde40d710f68d3d20c9d5c",
  measurementId: "G-29L3SGW0V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);