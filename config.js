import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAhxDKThK-TjoOugWEZhCupEzjfPqlN_ec",
    authDomain: "wireless-library-30eed.firebaseapp.com",
    databaseURL: "https://wireless-library-30eed.firebaseio.com",
    projectId: "wireless-library-30eed",
    storageBucket: "wireless-library-30eed.appspot.com",
    messagingSenderId: "539039549511",
    appId: "1:539039549511:web:99de32d53591e369d8c962"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore();