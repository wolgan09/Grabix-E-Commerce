// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
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
export const auth = getAuth(app);

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8" />
//     <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <meta name="theme-color" content="#000000" />
//     <meta
//       name="description"
//       content="Web site created using create-react-app"
//     />
//     <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
//     <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  
//     <title>GRABIX | Get your delivery in 12 hours</title>
//   </head>
//   <body>
//     <noscript>You need to enable JavaScript to run this app.</noscript>
//     <div id="root"></div>
//   </body>
// </html>
