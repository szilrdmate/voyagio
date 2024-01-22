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
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-b from-blue-700 via-blue-500 to-white'>
      <div className='grid grid-cols-2 bg-black bg-opacity-40 backdrop-blur overflow-hidden rounded-3xl border border-gray-300 relative'>
        <div
          className={`z-10 bg-white w-1/2 h-full absolute duration-300 transition-transform ease-in-out delay-75 ${translateClass}`}>
          {error && (
            <div className='animate-fade-in text-red-600 bg-white p-2 rounded-xl absolute left-0 bottom-0'>
              {error} <button onClick={clearError}>X</button>
            </div>
          )}
        </div>
        <div
          className={`${signTranslateClass} delay-75 duration-300 transition-transform ease-in-out`}>
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
