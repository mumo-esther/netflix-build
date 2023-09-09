// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCvEn-qM5Cn1uP-sJXglqDdOs12CTTvDEM",
  authDomain: "netflix-build-14c63.firebaseapp.com",
  projectId: "netflix-build-14c63",
  storageBucket: "netflix-build-14c63.appspot.com",
  messagingSenderId: "217670495295",
  appId: "1:217670495295:web:8724d1a3885f8bffcd1c8a",
  measurementId: "G-5K2S183CFN"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;