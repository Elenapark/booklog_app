import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export function googleSignIn() {
  signInWithPopup(auth, provider).catch((error) => {
    console.error(error);
  });
}

export function googleSignOut() {
  signOut(auth).catch((error) => {
    console.error(error);
  });
}

export function onUserStateChanged(callbackFunc: (user: User | null) => void) {
  onAuthStateChanged(auth, (user) => {
    callbackFunc(user);
  });
}
