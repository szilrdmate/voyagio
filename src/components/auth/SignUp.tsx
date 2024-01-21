import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>("");
  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const signUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center bg-cover bg-[url("https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
      <form
        className='w-96 bg-[#00000040] backdrop-blur border-gray-300 border py-8 px-8 rounded-lg space-y-6'
        onSubmit={signUp}>
        <div>
          <h2 className='text-white text-4xl font-bold text-center'>
            Create An Account
          </h2>
        </div>
        <div>
          <input
            className='py-4 px-4 rounded-lg focus:outline-none w-full placeholder:text-gray-300 placeholder:text-lg bg-transparent border border-blue-200 text-white'
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
            className='py-4 px-4 rounded-lg focus:outline-none w-full placeholder:text-gray-300 placeholder:text-lg bg-transparent border border-blue-200 mb-2 text-white'
            type='password'
            name='sign-in-password'
            id='sign-in-password'
            autoComplete='current-password'
            onChange={handlePasswordChange}
            placeholder='Enter your password'
          />
        </div>
        <div>
          <button
            className='w-full button bg-teal-500 text-white text-xl mb-4'
            type='submit'>
            Sign Up
          </button>
          <p className='text-blue-200 text-center'>
            Already have an account?{" "}
            <Link to='/signin' className='hover:underline'>
              Sign In
            </Link>
          </p>
        </div>
        {error && <div>An error occured: {error}</div>}
      </form>
    </div>
  );
};

export default SignUp;
