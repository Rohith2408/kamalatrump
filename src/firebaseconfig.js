import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

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
const voteCollection=collection(db,"Votes");

const getAllResponses=async ()=>{
    const querySnapshot = await getDocs(voteCollection);
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    })
}

const addResponse = async (data) => {
    try {
        const docRef = await addDoc(voteCollection, {
            Vote:data?.vote,
            Comment:data?.comment?data.comment:""
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export { db, collection, addDoc,getAllResponses,addResponse };
