import firebase from "firebase"
import "firebase/firestore"
import "firebase/storage"

var firebaseConfig = {
  apiKey: "AIzaSyBMst9J_geprXlU-shNrjLUrrzmiDR1M7s",
  authDomain: "somativa-cc5f4.firebaseapp.com",
  projectId: "somativa-cc5f4",
  storageBucket: "somativa-cc5f4.appspot.com",
  messagingSenderId: "245715280407",
  appId: "1:245715280407:web:1b20b5f89a3a4c91fc7252"


  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
