// using everything compat because:
// https://stackoverflow.com/questions/69139443/property-auth-does-not-exist-on-type-typeof-import-firebase-auth
import firebase from "firebase/compat/app";

// ––––––––––––––––– BASIC FIREBASE SETUP –––––––––––––––––

// asks next to bundle these SDKs
import "firebase/compat/auth";
// into our main javascript bundle,
import "firebase/compat/firestore";
// eventually sending them down to
import "firebase/compat/storage";
// the client application.

const firebaseConfig = {
  apiKey: "AIzaSyCxbjoTsMTwOoOMk5pWfSA06YQsZkbnhhg",
  authDomain: "poclogin-calc.firebaseapp.com",
  projectId: "poclogin-calc",
  storageBucket: "poclogin-calc.appspot.com",
  messagingSenderId: "661774535283",
  appId: "1:661774535283:web:013bc86bdaba5428db7806",
  measurementId: "G-DD333C2FE1",
};

if (!firebase.apps.length) {
  // next may try to run initialize
  // multiple times without that if
  firebase.initializeApp(firebaseConfig);
}

// these are not the same as the ones above;
// so for coding purposes instead of bundling.
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

// ––––––––––––––––– EXTRA FIREBASE GIMMICKS –––––––––––––––––
