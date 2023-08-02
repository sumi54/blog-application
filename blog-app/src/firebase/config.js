
import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBGXjauT7hqX8uNY5PHQj8bWIy8S__a0iQ",
    authDomain: "blog-app-8ad80.firebaseapp.com",
    projectId: "blog-app-8ad80",
    storageBucket: "blog-app-8ad80.appspot.com",
    messagingSenderId: "773190226374",
    appId: "1:773190226374:web:4759afa3718716b410e2c7",
    measurementId: "G-MTLJ1YTNQ6"
  };

initializeApp(firebaseConfig);
const db= getFirestore();
export {db}