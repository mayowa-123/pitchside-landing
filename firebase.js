import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey:            "AIzaSyCvK_7_Z4-KI7PACIBl3ahAxw9Xiyh9P1Q",
  authDomain:        "pitchside-76c5b.firebaseapp.com",
  projectId:         "pitchside-76c5b",
  storageBucket:     "pitchside-76c5b.firebasestorage.app",
  messagingSenderId: "647363119981",
  appId:             "1:647363119981:web:6c0f1deee92f18266e6864",
  measurementId:     "G-VMVR4DDLKP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

