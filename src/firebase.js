import firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCx9qAcuCkQtahdVQTpCciTwpO32goGkVk",
    authDomain: "codersbay-42d99.firebaseapp.com",
    databaseURL: "https://codersbay-42d99.firebaseio.com",
    projectId: "codersbay-42d99",
    storageBucket: "codersbay-42d99.appspot.com",
    messagingSenderId: "550706651632"
};
firebase.initializeApp(config);
export default firebase;