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
  const { createUser, clearError } = UserAuth();

  // Email change event listener
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    clearError(); // Clear error when the user starts typing
  };

  // Password change event listener
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    clearError(); // Clear error when the user starts typing
  };

  // Function to handle sign-up request
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      navigate("/account");
    } catch {
      // Error handling is done in the context
    }
  };

  const switchToLogin = () => {
    clearError();
    setState(true);
  };

  return (
    <div className='w-full h-full col-start-2 col-span-1'>
      <form
        className='relative w-96 py-8 px-8 space-y-6'
        onSubmit={handleSignUp}>
        <div>
          <h2 className='text-white text-4xl font-bold text-center'>
            Create An Account
          </h2>
        </div>
        <div>
          <input
            className='py-4 px-4 rounded-full focus:outline-none w-full placeholder:text-gray-300 placeholder:text-lg bg-transparent border border-blue-200 text-white'
            type='email'
            name='sign-up-email'
            id='sign-up-email'
            autoComplete='true'
            onChange={handleEmailChange}
            placeholder='Enter email address'
          />
        </div>
        <div>
          <input
            className='py-4 px-4 rounded-full focus:outline-none w-full placeholder:text-gray-300 placeholder:text-lg bg-transparent border border-blue-200 mb-2 text-white'
            type='password'
            name='sign-up-password'
            id='sign-up-password'
            autoComplete='current-password'
            onChange={handlePasswordChange}
            placeholder='Enter your password'
          />
          <p className='text-blue-200 hover:underline'>At least 6 characters</p>
        </div>
        <div>
          <button
            className='w-full button py-3 bg-teal-500 text-white text-xl mb-4'
            type='submit'>
            Sign Up
          </button>
          <p className='text-blue-200 text-center'>
            Already have an account?{" "}
            <span onClick={switchToLogin} className='hover:underline'>
              Sign In
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
