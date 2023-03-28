import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyA9wSnk0FzIrg-KVCFt-2pAiTuv_lXzIg8",
  authDomain: "portfolio-website-sam.firebaseapp.com",
  projectId: "portfolio-website-sam",
  storageBucket: "portfolio-website-sam.appspot.com",
  messagingSenderId: "165671560627",
  appId: "1:165671560627:web:48c70610e9ffa96142d7c6",
  measurementId: "G-N0G3W1TL9J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db;
