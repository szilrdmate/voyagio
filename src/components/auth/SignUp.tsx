// src/components/auth6SignUp.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

interface Props {
  setState: SetSignInType;
}

type SetSignInType = (isSignIn: boolean) => void;

const SignUp: React.FC<Props> = ({ setState }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const { createUser, clearError, setError } = UserAuth();

  // Email change event listener
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(null);
    clearError(); // Clear error when the user starts typing
  };

  // Password change event listener
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError(null);
    clearError(); // Clear error when the user starts typing
  };

  // Function to handle sign-up request
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  const switchToLogin = () => {
    clearError();
    setState(true);
  };

  return (
    <div className="col-span-1 col-start-2 h-full w-full">
      <form
        className="relative w-96 space-y-6 px-8 py-8"
        onSubmit={handleSignUp}
      >
        <div>
          <h2 className="text-whigray-800 text-left text-3xl font-bold">
            Sign Up
          </h2>
        </div>
        <div>
          <input
            className="placeholder:text-md w-full rounded-full border border-gray-300 bg-gray-50 p-4 text-gray-500 placeholder:text-gray-400 focus:outline-none"
            type="email"
            name="sign-up-email"
            id="sign-up-email"
            autoComplete="true"
            onChange={handleEmailChange}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            className="placeholder:text-md mb-2 w-full rounded-full border border-gray-300 bg-gray-50 p-4 text-gray-500 placeholder:text-gray-400 focus:outline-none"
            type="password"
            name="sign-up-password"
            id="sign-up-password"
            autoComplete="current-password"
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <p className="text-gray-400">At least 6 characters</p>
        </div>
        <div>
          <button
            className="button mb-4 w-full rounded-full bg-teal-500 py-3 text-xl text-white"
            type="submit"
          >
            Create an Account
          </button>
          <p className="text-center text-gray-400">
            Already have an account?{" "}
            <span onClick={switchToLogin} className="hover:underline">
              Sign In
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
