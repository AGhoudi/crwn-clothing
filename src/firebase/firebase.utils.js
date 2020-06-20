import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBGTMxAg6ggQsYWVgc59CgdFTMnX1eq4jo",
    authDomain: "crwn-db-4b432.firebaseapp.com",
    databaseURL: "https://crwn-db-4b432.firebaseio.com",
    projectId: "crwn-db-4b432",
    storageBucket: "crwn-db-4b432.appspot.com",
    messagingSenderId: "25153344530",
    appId: "1:25153344530:web:8f2f08d0df2d00e09db4cb",
    measurementId: "G-259NFBNG0X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;