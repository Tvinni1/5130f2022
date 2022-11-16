import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBNGkxKL9ONVYvQnw6kawjep-VoUc7S738",
    authDomain: "uml-thrifty.firebaseapp.com",
    projectId: "uml-thrifty",
    storageBucket: "uml-thrifty.appspot.com",
    messagingSenderId: "705234540133",
    appId: "1:705234540133:web:95895202a4d8209a68988c",
    measurementId: "G-YYWJT7YYYB"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export { auth, db, storage}