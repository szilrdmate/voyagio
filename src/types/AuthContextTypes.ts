import { ReactNode } from "react";
import { User, UserCredential } from "firebase/auth";

export type AuthContextProviderProps = {
	children: ReactNode;
};

export type AuthContextType = {
	user: User | null;
	loading: boolean;
	error: string | null;
	createUser: (email: string, password: string) => Promise<UserCredential>;
	signIn: (email: string, password: string) => Promise<UserCredential>;
	logout: () => Promise<void>;
	clearError: () => void;
	setError: React.Dispatch<React.SetStateAction<string | null>>;
};