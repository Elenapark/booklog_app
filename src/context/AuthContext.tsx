import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { onUserStateChanged } from "../api/firebase";
import { googleSignIn, googleSignOut } from "../api/firebase";
import { IUser, userInfoConverter } from "../utils/converter/userInfoConverter";

interface IAuthContext {
  user: IUser | null;
  googleSignIn: () => void;
  googleSignOut: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    onUserStateChanged((user) => {
      if (user) {
        const result = userInfoConverter(user);
        setUser(result);
      } else {
        setUser(user);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, googleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth는 AuthProvider 안에서 써야합니다");
  }
  return context;
};
