import { createContext, useContext, useState, ReactNode } from "react";
import useFirebaseAuth from "../hooks/useFirebaseAuth";
import { IUser } from "../utils/converter/userInfoConverter";

interface IAuthContext {
  user: IUser | null | void;
  signInWithGoogle: () => void;
  signOutWithGoogle: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const value = useFirebaseAuth();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth는 AuthProvider 안에서 써야합니다");
  }
  return context;
};
