// we first need to import firebase
import firebase from "firebase/app";
// importing database
import "firebase/firestore";
// importing authentication, since we will use it in project
import "firebase/auth";

const config = {
    apiKey: "AIzaSyD8ntAv4Y7Cz49uMUe7mDmKpbf8zrQmPps",
    authDomain: "crown-clothing-db-c6692.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-c6692.firebaseio.com",
    projectId: "crown-clothing-db-c6692",
    storageBucket: "crown-clothing-db-c6692.appspot.com",
    messagingSenderId: "661514146164",
    appId: "1:661514146164:web:70b84cf91b43117e7c1c21",
    measurementId: "G-QHB197JGR2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;