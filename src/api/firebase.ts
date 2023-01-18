import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

/**
 * Firebase Auth
 */

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

/**
 * Firebase Realtime Database - wishlist
 */

export interface IWishlistProps {
  id: string;
  title: string;
  imageUrl: string;
}

export function saveToWishList(uid: string, item: IWishlistProps) {
  return set(ref(database, `wishlist/${uid}/${item.id}`), item);
}
