import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyB0-VuXOn6tVqaSrhRw5fcH79yo9oAuu8I',
    authDomain: 'fresh-san-jose.firebaseapp.com',
    databaseURL: 'https://fresh-san-jose.firebaseio.com',
    projectId: 'fresh-san-jose',
    storageBucket: 'fresh-san-jose.appspot.com',
    messagingSenderId: '183233582348',
};

firebase.initializeApp(config);

export default firebase;
