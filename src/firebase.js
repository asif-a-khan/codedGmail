import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA3Fl-0Rwx_I6tCnLDithAhJ9p1qmhfPeI",
  authDomain: "cgdb-99e8c.firebaseapp.com",
  projectId: "cgdb-99e8c",
  storageBucket: "cgdb-99e8c.appspot.com",
  messagingSenderId: "445990213994",
  appId: "1:445990213994:web:81f6bf25c1c8e0af31ad13"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }

export default firebase