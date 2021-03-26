import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBLhgGTETLXOBuqLMIanjB2g3tfEFYft0I",
  authDomain: "whatsapp-dd99c.firebaseapp.com",
  projectId: "whatsapp-dd99c",
  storageBucket: "whatsapp-dd99c.appspot.com",
  messagingSenderId: "881987420669",
  appId: "1:881987420669:web:b81ecea5e8afb55d1f9994"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore();
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}