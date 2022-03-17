import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//const firebase = initializeApp;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgoOsiMmNoVzeZ1TzCZppBt2kDGFPrjho",
  authDomain: "journal-app-react-188a4.firebaseapp.com",
  projectId: "journal-app-react-188a4",
  storageBucket: "journal-app-react-188a4.appspot.com",
  messagingSenderId: "398954540530",
  appId: "1:398954540530:web:0388527cb957a21ac20f6b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}