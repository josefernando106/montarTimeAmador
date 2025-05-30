// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMu6VYPsZ8rwpD1RzGTMedJw5sGaeAznQ",
  authDomain: "miniblog-28e42.firebaseapp.com",
  projectId: "miniblog-28e42",
  storageBucket: "miniblog-28e42.firebasestorage.app",
  messagingSenderId: "1031672495904",
  appId: "1:1031672495904:web:32371ec9c184caef542145"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { db, auth}


