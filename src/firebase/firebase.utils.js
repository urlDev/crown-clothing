import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

export const createUserProfileDocument = async(userAuth, additionalData) => {
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
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;