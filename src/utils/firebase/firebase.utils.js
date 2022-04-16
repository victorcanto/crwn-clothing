import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAj5DGoBOpnt5gomlKSUkefvmxZeUQfTk0',
  authDomain: 'crwn-clothing-db-42cc3.firebaseapp.com',
  projectId: 'crwn-clothing-db-42cc3',
  storageBucket: 'crwn-clothing-db-42cc3.appspot.com',
  messagingSenderId: '493971304903',
  appId: '1:493971304903:web:a6a5064468dfdce4f2a9e2',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
 