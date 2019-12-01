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

// were making an api request here thats why its async. 
// putting async before braces makes js understand that its async
export const createUserProfileDocument = async(userAuth, additionalData) => {
    // if userauth does not exist, return, do not run the function
    // userauth returns false when there is no sign in info, null as we set
    if (!userAuth) return;

    // uid is user id, comes from snapshot of firebase function get().
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // get is for getting the user data which includes exists
    // snapshot comes from firebase terms(as a term) but in here we create it. taking a snapshot of data
    const snapShot = await userRef.get();
    // this is to reach users by saying "users/"
    // things after / are user id
    // console.log(firestore.doc("users/144fgfgsafa"));


    // exists comes from snapshot, when you make a snapshot of user, theres an
    // object called exists which checks if user exists in database or not
    // if snapshot doesnt exist
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // try catch is async/await method. inside try we write what we want to happen
        // in catch we try to catch error and show error messages
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;