import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCGYVomEODMniIPhpk16zZ3JivEmRuDu0c",
    authDomain: "angular-firebase-project-d7548.firebaseapp.com",
    databaseURL: "https://angular-firebase-project-d7548.firebaseio.com",
    projectId: "angular-firebase-project-d7548",
    storageBucket: "angular-firebase-project-d7548.appspot.com",
    messagingSenderId: "959941551606",
    appId: "1:959941551606:web:f343d293ad3007a42353d7"
};

firebase.initializeApp(firebaseConfig);