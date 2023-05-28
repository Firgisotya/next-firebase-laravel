import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDxyoWfm6TxodoqJt3PD3w8-W6j5cRZDkk",
    authDomain: "nextjs-3d90f.firebaseapp.com",
    projectId: "nextjs-3d90f",
    storageBucket: "nextjs-3d90f.appspot.com",
    messagingSenderId: "88187982661",
    appId: "1:88187982661:web:72947b2b2f68df556aa42c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db};
