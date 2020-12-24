import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCN5SM8Dd0w4vwZ_R50t9xbNgAI18TilBI",
    authDomain: "discord-clone-c5810.firebaseapp.com",
    projectId: "discord-clone-c5810",
    storageBucket: "discord-clone-c5810.appspot.com",
    messagingSenderId: "1093448030793",
    appId: "1:1093448030793:web:d6a4cc95c28d4f2277fd98",
    measurementId: "G-HGTMC94YPE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;