// src/components/AuthWrapper.tsx
import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { UserAuth } from "../../context/AuthContext";

type SetSignInType = (isSignIn: boolean) => void;

const AuthWrapper: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const [intermediateSignIn, setIntermediateSignIn] = useState<boolean>(true);
  const { error, clearError } = UserAuth();

  // Function to update both states with a delay
  const updateSignInState: SetSignInType = (newState: boolean) => {
    setIntermediateSignIn(newState);
    setTimeout(() => setIsSignIn(newState), 100); //
  };

  const translateClass = intermediateSignIn
    ? "translate-x-full"
    : "-translate-x-0";

  const signTranslateClass = intermediateSignIn
    ? "-translate-x-0"
    : "translate-x-full";

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-blue-700 via-blue-500 to-white">
      <div className="relative grid grid-cols-2 overflow-hidden rounded-3xl bg-black bg-opacity-40 backdrop-blur">
        <div
          className={`absolute z-10 h-full w-1/2 bg-white transition-transform delay-75 duration-300 ease-in-out ${translateClass}`}
        >
          {error && (
            <div className="animate-fade-in absolute bottom-0 left-0 rounded-xl bg-white p-2 text-red-600">
              {error} <button onClick={clearError}>X</button>
            </div>
          )}
        </div>
        <div
          className={`${signTranslateClass} transition-transform delay-75 duration-300 ease-in-out`}
        >
          {isSignIn ? (
            <SignIn setState={updateSignInState} />
          ) : (
            <SignUp setState={updateSignInState} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
