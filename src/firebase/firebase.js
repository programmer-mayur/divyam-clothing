import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAWsX63miJvUsMduptvpD4QLihy7Povtf4",
  authDomain: "divyam-clothing.firebaseapp.com",
  databaseURL: "https://divyam-clothing.firebaseio.com",
  projectId: "divyam-clothing",
  storageBucket: "divyam-clothing.appspot.com",
  messagingSenderId: "187906057564",
  appId: "1:187906057564:web:d8d863332f7e0afe"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
