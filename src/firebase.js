// import firebase from 'firebase/app';
import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC7DLt6Ff-BNR8DqxOzKUxhR7ht33Nhlbw",
    authDomain: "clone-937eb.firebaseapp.com",
    projectId: "clone-937eb",
    storageBucket: "clone-937eb.appspot.com",
    messagingSenderId: "301049823147",
    appId: "1:301049823147:web:c4607a2481b2d643c11cee"
  };

  initializeApp(firebaseConfig);

  export const auth = getAuth();