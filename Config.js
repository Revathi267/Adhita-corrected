import firebase from 'firebase'
require('@firebase/firestore') 

  var firebaseConfig = {
    apiKey: "AIzaSyA2aF8jHXcjOhF2V2pwmHwJ3vIHzBx-S1E",
    authDomain: "book-santa-9260c.firebaseapp.com",
    projectId: "book-santa-9260c",
    storageBucket: "book-santa-9260c.appspot.com",
    messagingSenderId: "261220340821",
    appId: "1:261220340821:web:b6c455a3e0c2d3c87af0dc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();