import firebase from 'firebase';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyAtQrhWrXl4PVxqMV5gSs9R7P5YlSmM_9w",
    authDomain: "twitter-clone-ae160.firebaseapp.com",
    projectId: "twitter-clone-ae160",
    storageBucket: "twitter-clone-ae160.appspot.com",
    messagingSenderId: "924417633616",
    appId: "1:924417633616:web:68b7a32f12d4605abbd055",
    measurementId: "G-3C77PWLJ18"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db=firebase.firestore();
export default db;