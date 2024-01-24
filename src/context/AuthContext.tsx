// src/context/AuthContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { UserCredential, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { updateUserProfile, uploadProfilePicture } from "../utils/firestoreFunctions";
import { auth } from "../utils/firebaseConfig";

type AuthContextType = {
	user: User | null;
	loading: boolean;
	error: string | null;
	createUser: (email: string, password: string) => Promise<UserCredential>;
	signIn: (email: string, password: string) => Promise<UserCredential>;
	logout: () => Promise<void>;
	clearError: () => void;
	setError: React.Dispatch<React.SetStateAction<string | null>>;
	handleProfileUpdate: (userId: string, name: string, file: File) => Promise<void>;
	removeProfilePicture: (userId: string) => Promise<void>;
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
	setError: () => {},
	clearError: () => {},
	handleProfileUpdate: async () => {
		throw new Error("handleProfileUpdate function is not implemented");
	},
	removeProfilePicture: async () => {
		// This is a placeholder implementation.
		// You might throw an error or leave it as a no-op (no operation)
		throw new Error("removeProfilePicture function is not implemented");
	},
};

const UserContext = createContext<AuthContextType>(defaultAuthContext);

type AuthContextProviderProps = {
	children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const createUser = (email: string, password: string) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = async (email: string, password: string) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logout = () => {
		return signOut(auth);
	};

	const clearError = () => {
		setError(null);
	};

	const handleProfileUpdate = async (userId: string, name: string, file: File) => {
		try {
			const photoURL = await uploadProfilePicture(userId, file);
			await updateUserProfile(userId, { name, photoURL });

			// Update the local user state
			if (user) {
				setUser({
					...user,
					displayName: name, // Assuming name maps to displayName
					photoURL: photoURL,
				});
			}
		} catch (error) {
			console.error("Error updating profile: ", error);
			// Handle error (e.g., update state to show error message to user)
		}
	};

	const removeProfilePicture = async (userId: string) => {
		try {
			// Assuming you have a default or empty string for removal
			const defaultPhotoURL = "";
			await updateUserProfile(userId, { photoURL: defaultPhotoURL });

			// Update the local user state
			if (user) {
				setUser({
					...user,
					photoURL: defaultPhotoURL,
				});
			}
		} catch (error) {
			console.error("Error removing profile picture: ", error);
			// Handle error (e.g., update state to show error message to user)
		}
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
			value={{
				createUser,
				user,
				logout,
				signIn,
				loading,
				error,
				clearError,
				setError,
				handleProfileUpdate,
				removeProfilePicture,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(UserContext);
};
