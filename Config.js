import firebase from 'firebase'
require('@firebase/firestore') 

var firebaseConfig = {
  apiKey: "AIzaSyDTStT1JvS1Iq8Cl63WxJ0cSRudT5At7HQ",
  authDomain: "multiplayer-car-racing-40379.firebaseapp.com",
  databaseURL: "https://multiplayer-car-racing-40379-default-rtdb.firebaseio.com",
  projectId: "multiplayer-car-racing-40379",
  storageBucket: "multiplayer-car-racing-40379.appspot.com",
  messagingSenderId: "198167398199",
  appId: "1:198167398199:web:4438a7b927514877f07cb2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
  