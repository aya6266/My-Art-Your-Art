import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWBtaQrDPt_5pqvfDmoq4OCS7Gm00B3Bk",
  authDomain: "instaclone-6bfc6.firebaseapp.com",
  projectId: "instaclone-6bfc6",
  storageBucket: "instaclone-6bfc6.appspot.com",
  messagingSenderId: "77287110074",
  appId: "1:77287110074:web:655c23487caafac5a3d983",
  measurementId: "G-CN0Q0FGH9M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage();
const projectFirestore = getFirestore();

export { projectFirestore, projectStorage };
