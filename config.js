import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDs2nG2KjrRZJ-IpV_zWPOoZBw50rfPYM8",
  authDomain: "th-4a177.firebaseapp.com",
  projectId: "th-4a177",
  storageBucket: "th-4a177.appspot.com",
  messagingSenderId: "205178052129",
  appId: "1:205178052129:web:3b0fc3c7f0a4c186678d60",
  measurementId: "G-67184XZ3JV"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
