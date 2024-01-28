import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { UserAuth } from "../../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { SetSignInType } from "../../../types/SignInProps";

const AuthWrapper: React.FC = () => {
	const [isSignIn, setIsSignIn] = useState<boolean>(true);
	const [intermediateSignIn, setIntermediateSignIn] = useState<boolean>(true);
	const { error, clearError } = UserAuth();

	// Function to update both states with a delay
	const updateSignInState: SetSignInType = (newState: boolean) => {
		setIntermediateSignIn(newState);
		setTimeout(() => setIsSignIn(newState), 100); //
	};

	const translateClass = intermediateSignIn ? "translate-x-full" : "-translate-x-0";

	const signTranslateClass = intermediateSignIn ? "md:-translate-x-0" : "md:translate-x-full";

	return (
		<div className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-blue-700 via-blue-500 to-white px-6">
			<div className="relative grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-lg md:grid">
				<div className={`absolute z-10 hidden h-full w-1/2 bg-white transition-transform delay-75 duration-300 ease-in-out md:block ${translateClass}`}>
					<img className="absolute h-full object-cover" src="https://images.unsplash.com/photo-1682686581221-c126206d12f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
					<div className="absolute h-full w-full bg-black bg-opacity-60 pt-10">
						<h3 className="text-center text-4xl font-bold text-white">{isSignIn ? "Welcome back!" : "Glad to see you!"}</h3>
						{error && (
							<div className="animate-fade-in absolute bottom-0 z-20 mx-auto flex w-full justify-between bg-white px-6 py-2 text-center text-red-600">
								{error}{" "}
								<button onClick={clearError}>
									<FontAwesomeIcon icon={faX} />
								</button>
							</div>
						)}
					</div>
				</div>
				<div className={`${signTranslateClass} transition-transform delay-75 duration-300 ease-in-out`}>{isSignIn ? <SignIn setState={updateSignInState} /> : <SignUp setState={updateSignInState} />}</div>
			</div>
		</div>
	);
};

export default AuthWrapper;
