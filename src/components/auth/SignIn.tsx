// src/components/auth/SignIn.tsx
import React, { useState, FormEvent, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

interface Props {
  setState: SetSignInType;
}

type SetSignInType = (isSignIn: boolean) => void;

const SignIn: React.FC<Props> = ({ setState }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signIn, clearError, setError } = UserAuth();
  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    clearError(); // Clear error when user starts typing
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    clearError(); // Clear error when user starts typing
  };

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearError();
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  const switchToSignUp = () => {
    clearError();
    setState(false);
  };

  return (
    <div className="col-span-1 col-start-1 h-full w-full">
      <form
        className="relative w-96 space-y-6 px-8 py-8"
        onSubmit={handleSignIn}
      >
        <div>
          <h2 className="text-left text-3xl font-bold text-gray-800">
            Sign In
          </h2>
        </div>
        <div>
          <input
            className="placeholder:text-md w-full rounded-full border border-gray-300 bg-gray-50 p-4 text-gray-500 placeholder:text-gray-400 focus:outline-none"
            type="email"
            name="sign-in-email"
            id="sign-in-email"
            autoComplete="true"
            onChange={handleEmailChange}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            className="placeholder:text-md mb-2 w-full rounded-full border border-gray-300 bg-gray-50 p-4 text-gray-500 placeholder:text-gray-400 focus:outline-none"
            type="password"
            name="sign-in-password"
            id="sign-in-password"
            autoComplete="current-password"
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <Link className="text-gray-400 hover:underline" to="/">
            Forgot password?
          </Link>
        </div>
        <div>
          <button
            className="button mb-4 w-full rounded-full bg-teal-500 py-3 text-xl text-white"
            type="submit"
          >
            Log In
          </button>
          <p className="text-center text-gray-400">
            Don't have an account?{" "}
            <span onClick={switchToSignUp} className="hover:underline">
              Sign Up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
