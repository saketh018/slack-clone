import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD99ppNAx4IQ4bOoxq20XwwBZXqoPmyEBE",
  authDomain: "slack-clone-9b8b5.firebaseapp.com",
  databaseURL: "https://slack-clone-9b8b5-default-rtdb.firebaseio.com",
  projectId: "slack-clone-9b8b5",
  storageBucket: "slack-clone-9b8b5.appspot.com",
  messagingSenderId: "695815554277",
  appId: "1:695815554277:web:d38fc00081cf024787800c",
  measurementId: "G-6L934Y9YXP",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
