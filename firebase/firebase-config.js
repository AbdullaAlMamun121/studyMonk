  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBARMDleEQZX2AZ4ksRqJ23v7eMBOOlcfo",
    authDomain: "studymonk-244b1.firebaseapp.com",
    projectId: "studymonk-244b1",
    storageBucket: "studymonk-244b1.appspot.com",
    messagingSenderId: "263719890026",
    appId: "1:263719890026:web:289cc5cfb8489a3f532e13"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export {auth}
