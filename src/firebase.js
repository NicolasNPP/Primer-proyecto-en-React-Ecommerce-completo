import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCB3LDbbr-bMELBsEsw6IIx4H8VT_g9kCs",
    authDomain: "nicoecommerce-62baf.firebaseapp.com",
    projectId: "nicoecommerce-62baf",
    storageBucket: "nicoecommerce-62baf.appspot.com",
    messagingSenderId: "627738651124",
    appId: "1:627738651124:web:62b71336c1e0b21df471a1"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();