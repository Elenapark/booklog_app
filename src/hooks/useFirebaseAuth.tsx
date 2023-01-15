import React, { useState } from "react";
import { googleSignIn, googleSignOut } from "../api/firebase";
import { IUser, userInfoConverter } from "../utils/converter/userInfoConverter";

export default function useFirebaseAuth() {
  const [user, setUser] = useState<IUser | null | void>(null);

  const signInWithGoogle = async () => {
    try {
      const result = await googleSignIn();
      if (!result) {
        throw new Error("정보없음");
      }
      const user = userInfoConverter(result);
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const signOutWithGoogle = async () => {
    try {
      const result = await googleSignOut();
      setUser(result);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    user,
    signInWithGoogle,
    signOutWithGoogle,
  };
}
