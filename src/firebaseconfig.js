import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBvptVd16U_iGscKoo6V6uBzNH4gWXLOJ4",
    authDomain: "memecoins-35950.firebaseapp.com",
    projectId: "memecoins-35950",
    storageBucket: "memecoins-35950.firebasestorage.app",
    messagingSenderId: "796242883516",
    appId: "1:796242883516:web:6d51158214ff489b5a71b9",
    measurementId: "G-FLW5P7SYLT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
