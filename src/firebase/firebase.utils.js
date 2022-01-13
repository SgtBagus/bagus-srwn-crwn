import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: 'AIzaSyD-2s3_Snkusr3Y03gwbiz4ZN-T2Aj6hvI',
    authDomain: 'crwn-db-5945e.firebaseapp.com',
    projectId: 'crwn-db-5945e',
    storageBucket: 'crwn-db-5945e.appspot.com',
    messagingSenderId: '282244972100',
    appId: '1:282244972100:web:25ed9d78587ff582730611',
    measurementId: 'G-03ZX34G82X'
};

export const createUserProfileDocuments = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (err) {
            console.log('error data', err.message);
        }
    };

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
