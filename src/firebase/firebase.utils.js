import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config={
    apiKey: "AIzaSyCX122vyOAkJD-qZBf-6xukAFj_C1mHAn4",
    authDomain: "crown-clothingdb.firebaseapp.com",
    databaseURL: "https://crown-clothingdb.firebaseio.com",
    projectId: "crown-clothingdb",
    storageBucket: "",
    messagingSenderId: "1094183797125",
    appId: "1:1094183797125:web:2f9fe38694f768b0"
  } 

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt:"select_account"});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;
  