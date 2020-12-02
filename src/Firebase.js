import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmGYwtIrnoF21VzmDAUy6Fw0Oe63VGQjU",
  authDomain: "tinder-clone-1b8a5.firebaseapp.com",
  databaseURL: "https://tinder-clone-1b8a5.firebaseio.com",
  projectId: "tinder-clone-1b8a5",
  storageBucket: "tinder-clone-1b8a5.appspot.com",
  messagingSenderId: "392731349136",
  appId: "1:392731349136:web:09e806ed27a1452b7b4815",
  measurementId: "G-TPQSFZK61G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
