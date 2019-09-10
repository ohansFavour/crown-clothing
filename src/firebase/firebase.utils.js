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

  export const createUserProfile = async (userAuth, additionalData)=>{
    if(!userAuth){
      return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get(); 
    if(!snapshot.exists){
      const {displayName, email}= userAuth;
      const createdAt = new Date();
      

      try{
        await userRef.set({
          email, displayName,createdAt,...additionalData
        })

      }catch(error){
        console.log("error creating user", error.message)
      }
    }
    return userRef;
  }
  export const convertCollectionSnapshotToMap = (collectionSnapshot)=>{
   const transformedResult = collectionSnapshot.docs.map(doc=>{
     const {title, items} = doc.data();
    
     return {
       routeName: encodeURI(title.toLowerCase()),
       id: doc.id,
       title,
       items
     }
   })
    return transformedResult.reduce((accumulator,collectionObj)=>{
      accumulator[collectionObj.title.toLowerCase()] = collectionObj;
      return accumulator;
    },{})
  }

  export const addCollectionAndDocuments = async (collectionKey, itemsArray)=>{
    const collectionRef = firestore.collection(`${collectionKey}`);

    const batch = firestore.batch(); // accumulate all action, then send all just one time.
    itemsArray.forEach( obj=> {
      
      const docRef = collectionRef.doc();
      batch.set(docRef, obj)}
      )

      return await batch.commit(); // returns a promise when it completes

  }
  export default firebase;
  