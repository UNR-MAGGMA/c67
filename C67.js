import firebase from 'firebase/app';
//import database from 'firebase/database';

// add SDK Firebase
const firebaseConfig = {
        apiKey: "AIzaSyBzzmZOvzANuEipK1akIXCzruU2JAZibyw",
        authDomain: "c-67-7c2a5.firebaseapp.com",
        databaseURL: "https://c-67-7c2a5-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "c-67-7c2a5",
        storageBucket: "c-67-7c2a5.appspot.com",
        messagingSenderId: "596021029520",
        appId: "1:596021029520:web:15122a3d02076c2870c615",
        measurementId: "G-BPKJ3HZ6VX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db  = getDatabase(app)

export default firebase.database();