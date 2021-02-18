import firebase from 'firebase'
require('@firebase/firestore') 

var firebaseConfig = {
  apiKey: "AIzaSyCngFsPemwE-0ZzWkQBtqqIRQQd4x77QQk",
  authDomain: "book-santa-8ffc8.firebaseapp.com",
  projectId: "book-santa-8ffc8",
  storageBucket: "book-santa-8ffc8.appspot.com",
  messagingSenderId: "1026389904246",
  appId: "1:1026389904246:web:8850320824ee0dc75f8857"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
  