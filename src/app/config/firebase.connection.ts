import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCTjvcge18S48JT1lcq1V0CYjD0tBJCxaw",
  authDomain: "mariana-terapia-flora.firebaseapp.com",
  projectId: "mariana-terapia-flora",
  storageBucket: "mariana-terapia-flora.appspot.com",
  messagingSenderId: "435721731811",
  appId: "1:435721731811:web:bccda1dcbacb2f058b4fd6",
  measurementId: "G-470TG7G0W8"
};

const app = initializeApp(config);
export const db = getFirestore(app);
