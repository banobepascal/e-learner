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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  });

  return await batch.commit();
};

export const convertCollectionSnapShotToMap = ( courses) => {
  const transformedCollection = courses.docs.map(doc => doc.data());

  return transformedCollection;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

const githubProvider = new firebase.auth.GithubAuthProvider();
export const signInWithGithub = () => auth.signInWithRedirect(githubProvider);

export default firebase;
