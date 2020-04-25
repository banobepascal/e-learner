import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDMyfoq7k-eAZ45RIZ4E_HAdlcp2bCon54",
  authDomain: "e-learner-90dee.firebaseapp.com",
  databaseURL: "https://e-learner-90dee.firebaseio.com",
  projectId: "e-learner-90dee",
  storageBucket: "e-learner-90dee.appspot.com",
  messagingSenderId: "843565897249",
  appId: "1:843565897249:web:1bd3bac95fdec3d5f73560",
  measurementId: "G-REFSRNQDT7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
