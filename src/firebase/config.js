import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// forebase config
const firebaseConfig = {
    apiKey: "AIzaSyCpfZsjjLW_2vBfx78HlSqKTVJeLjva6jg",
    authDomain: "live-chat-8f810.firebaseapp.com",
    projectId: "live-chat-8f810",
    storageBucket: "live-chat-8f810.appspot.com",
    messagingSenderId: "642975178978",
    appId: "1:642975178978:web:340f72652ffb51c619bebb"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }