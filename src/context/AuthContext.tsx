// src/context/AuthContext.tsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  UserCredential,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  AuthError,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  error: AuthError | null;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  clearError: () => void;
};

// Provide a default value for the context
const defaultAuthContext: AuthContextType = {
  user: null,
  loading: true,
  error: null,
  createUser: async () => {
    throw new Error("Error occured while creating user");
  },
  signIn: async () => {
    throw new Error("Error occured while signing in");
  },
  logout: async () => {
    throw new Error("Error occured while logging out");
  },
  clearError: () => {},
};

const UserContext = createContext<AuthContextType>(defaultAuthContext);

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AuthError | null>(null);

  const createUser = async (email: string, password: string) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error as AuthError);
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error as AuthError);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      setError(error as AuthError);
      throw error;
    }
  };

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ createUser, user, error, logout, signIn, loading, clearError }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
