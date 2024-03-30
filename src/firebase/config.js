import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA9V7QySXgBjDGtKw14cdrF6OYindx-74U",
    authDomain: "mymoney-4a1c9.firebaseapp.com",
    projectId: "mymoney-4a1c9",
    storageBucket: "mymoney-4a1c9.appspot.com",
    messagingSenderId: "954690127345",
    appId: "1:954690127345:web:4352d87827a7a15173f050"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig)

  //initialize services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  
// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }