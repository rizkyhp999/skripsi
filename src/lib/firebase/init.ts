// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

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
// connectFirestoreEmulator(db, "localhost", 8080);

const storage = getStorage(app);
// connectStorageEmulator(storage, "localhost", 9199);
export { storage, db };
