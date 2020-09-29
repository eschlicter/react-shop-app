import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCJ4_WBZ233yQpkUfEDbEm-ktrYtTEw1H4",
    authDomain: "react-shop-db-1bab5.firebaseapp.com",
    databaseURL: "https://react-shop-db-1bab5.firebaseio.com",
    projectId: "react-shop-db-1bab5",
    storageBucket: "react-shop-db-1bab5.appspot.com",
    messagingSenderId: "335953167892",
    appId: "1:335953167892:web:bf7ed3e355dacce2428901",
    measurementId: "G-KQ814EH1K0"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;