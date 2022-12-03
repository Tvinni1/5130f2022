import firebase from 'firebase/compat/app';
//import * as firebase from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAi0p98S8d7_Soqm11RAJnwW25laH7DvEg",
    authDomain: "uml-thrifty-63704.firebaseapp.com",
    projectId: "uml-thrifty-63704",
    storageBucket: "uml-thrifty-63704.appspot.com",
    messagingSenderId: "228071417202",
    appId: "1:228071417202:web:f0e7185bf30e51f6a929eb",
    measurementId: "G-Z25LEF0WWC"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }