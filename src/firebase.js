import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDLlggpytorWtTmg7kViiyCljuWZBBfbuQ",
    authDomain: "twitter-clone-41222.firebaseapp.com",
    databaseURL: "https://twitter-clone-41222.firebaseio.com",
    projectId: "twitter-clone-41222",
    storageBucket: "twitter-clone-41222.appspot.com",
    messagingSenderId: "1097390437425",
    appId: "1:1097390437425:web:c69da44fd0129db51bd110",
    measurementId: "G-VH5E1X29Y9"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
