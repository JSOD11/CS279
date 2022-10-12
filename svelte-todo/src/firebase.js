import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// connect the app to firebase w the api key, etc
// so that we can access our datatables for CRUD operations
const firebaseConfig = {
    apiKey: 'AIzaSyA53LkL3bmpJvTkF120f_ij9YrDQNd7rVU',
    authDomain: 'svelte-todo-b5cf4.firebaseapp.com',
    projectId: 'svelte-todo-b5cf4',
    storageBucket: 'svelte-todo-b5cf4.appspot.com',
    messagingSenderId: '1065709554609',
    appId: '1:1065709554609:web:437116465e13d73b16cb90',
    measurementId: 'G-36KCEXY066'
};

// create the app using our config above
firebase.initializeApp(firebaseConfig);

// create ouir objects for auth (sign in with google) and connect to the firestore db
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();

// set up the google authentification and check whether there exists a valid user logged in
// or if the state has changed in terms of the user logged in
firebase.auth().onAuthStateChanged(function(user) {
    console.log('auth state changed');
    if (user) {
        // if there is a user logged in with google
        db.collection('users').doc(user.uid).get().then((docSnapshot) => {
            if (!docSnapshot.exists) {
                // if this is a new user logging in, add their information to the existing database of users
                // this is so we can save their todo list information if they decide to log in again later
                console.log(user.uid);
                db.collection('users').doc(user.uid).set({ });
            }
        });
    }
});