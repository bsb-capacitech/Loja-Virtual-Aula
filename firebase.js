// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPinWnsqNsDX_08Fr1lEaCPFKA_CMlraw",
  authDomain: "loja-virtual-aula-66fd9.firebaseapp.com",
  projectId: "loja-virtual-aula-66fd9",
  storageBucket: "loja-virtual-aula-66fd9.appspot.com",
  messagingSenderId: "95814023253",
  appId: "1:95814023253:web:69b4af8a5c75a7a39ffcdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
