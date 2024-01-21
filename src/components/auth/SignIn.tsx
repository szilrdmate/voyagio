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
    <div className='w-full h-full col-start-1 col-span-1'>
      <form
        className='relative w-96 py-8 px-8 space-y-6'
        onSubmit={handleSignIn}>
        <div>
          <h2 className='text-white text-4xl font-bold text-center'>Sign In</h2>
        </div>
        <div>
          <input
            className='py-4 px-4 text-white rounded-full focus:outline-none w-full placeholder:text-gray-300 placeholder:text-lg bg-transparent border border-blue-200'
            type='email'
            name='sign-in-email'
            id='sign-in-email'
            autoComplete='true'
            onChange={handleEmailChange}
            placeholder='Enter email address'
          />
        </div>
        <div>
          <input
            className='py-4 px-4 text-white rounded-full focus:outline-none w-full placeholder:text-gray-300 placeholder:text-lg bg-transparent border border-blue-200 mb-2'
            type='password'
            name='sign-in-password'
            id='sign-in-password'
            autoComplete='current-password'
            onChange={handlePasswordChange}
            placeholder='Enter your password'
          />
          <Link className='text-blue-200 hover:underline' to='/'>
            Forgot password?
          </Link>
        </div>
        <div>
          <button
            className='w-full rounded-full button py-3 bg-teal-500 text-white text-xl mb-4'
            type='submit'>
            Log In
          </button>
          <p className='text-blue-200 text-center'>
            Don't have an account?{" "}
            <span onClick={switchToSignUp} className='hover:underline'>
              Sign Up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
