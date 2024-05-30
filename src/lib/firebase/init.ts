// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy7IsvXJzZE6lbV4RD0J62r9mnLVvpN3Y",
  authDomain: "dayahidupbahasadaerah.firebaseapp.com",
  projectId: "dayahidupbahasadaerah",
  storageBucket: "dayahidupbahasadaerah.appspot.com",
  messagingSenderId: "617124248434",
  appId: "1:617124248434:web:3d26f664b1f771489e7beb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Ganti dengan port yang benar

const db = getFirestore(app); //konek ke database lokal
connectFirestoreEmulator(db, "localhost", 8080); //konek ke database lokal
