import Firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLEl9l9Jvf8PGwj6THPsMxsfkTHpLMyY0",
    authDomain: "mark-hatcher-podcast.firebaseapp.com",
    projectId: "mark-hatcher-podcast",
    storageBucket: "mark-hatcher-podcast.appspot.com",
    messagingSenderId: "281136994128",
    appId: "1:281136994128:web:b3cad4554380173f80fe55",
    measurementId: "G-9TFLGX2QQ7"
}

const firebase = Firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {firebase, db};