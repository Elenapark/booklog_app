import { User } from "firebase/auth";

// Adapter pattern

export interface IUser {
  uid: string;
  email: string | null;
  displayName: string;
  photoURL: string | null;
}

export function userInfoConverter(user: User): IUser {
  const { uid, email, displayName, photoURL } = user;

  return {
    uid,
    email,
    displayName: displayName ?? "",
    photoURL,
  };
}
