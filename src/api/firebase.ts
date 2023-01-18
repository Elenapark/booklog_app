import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";
import { get, getDatabase, ref, remove, set } from "firebase/database";
import { WishListType } from "../hooks/useWishlist";
import { IBookItemInfo } from "../types";

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

export async function saveToWishList({
  uid,
  item,
}: {
  uid?: string;
  item: WishListType;
}) {
  if (!uid) {
    throw Error("uid가 없습니다!");
  }

  return await set(ref(database, `wishlist/${uid}/${item.id}`), item);
}

export async function getWishList(uid: string): Promise<WishListType[]> {
  const snapshot = await get(ref(database, `wishlist/${uid}`));
  if (snapshot.exists()) {
    return Object.values(snapshot.val());
  }
  return [];
}

export async function removeFromWishList({
  uid,
  item,
}: {
  uid?: string;
  item: WishListType;
}) {
  return remove(ref(database, `wishlist/${uid}/${item.id}`));
}
