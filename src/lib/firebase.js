import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//Import seed file

const config = {
  apiKey: "AIzaSyCIUj3AZ85RFP3z7O4fHgSsroClJDaCXFA",
  authDomain: "socail-media-webapp.firebaseapp.com",
  projectId: "socail-media-webapp",
  storageBucket: "socail-media-webapp.appspot.com",
  messagingSenderId: "644486652638",
  appId: "1:644486652638:web:a1714acab4e2a66f29184f",
  measurementId: "G-QTKWBTQPHF",
};


const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
