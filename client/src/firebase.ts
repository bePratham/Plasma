import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCfgVogRXvTFScWGWjdCsg6QaqbrPCN4Qo",
    authDomain: "coding-interview-platform.firebaseapp.com",
    projectId: "coding-interview-platform",
    storageBucket: "coding-interview-platform.appspot.com",
    messagingSenderId: "792819351372",
    appId: "1:792819351372:web:f454451fc52f25fe1199e9"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
