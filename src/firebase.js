// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpustsqYfH8nKN8aku4Jn2aQHVuLBXg5g",
  authDomain: "grabix-demo.firebaseapp.com",
  projectId: "grabix-demo",
  storageBucket: "grabix-demo.appspot.com",
  messagingSenderId: "103803495511",
  appId: "1:103803495511:web:66f67c915b8df2fdb66f12",
  measurementId: "G-WW3Q0RS5LG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);