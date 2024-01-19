import React, { useState, FormEvent, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center bg-[url("https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
      <form
        className='w-96 bg-[#00000040] backdrop-blur border-gray-300 border py-8 px-8 rounded-lg space-y-6'
        onSubmit={handleSubmit}>
        <div>
          <h2 className='text-white text-4xl font-bold text-center'>Sign In</h2>
        </div>
        <div>
          <input
            className='py-4 px-4 text-white rounded-lg focus:outline-none w-full placeholder:text-gray-300 placeholder:text-lg bg-transparent border border-gray-300'
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
            className='py-4 px-4 text-white rounded-lg focus:outline-none w-full placeholder:text-gray-300 placeholder:text-lg bg-transparent border border-gray-300 mb-2'
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
            className='w-full button bg-teal-500 text-white text-xl mb-4'
            type='submit'>
            Log In
          </button>
          <p className='text-blue-200 text-center'>
            Don't have an account?{" "}
            <Link to='/signup' className='hover:underline'>
              Sign Up
            </Link>
          </p>
        </div>
        {error && <div>An error occured: {error}</div>}
      </form>
    </div>
  );
};

export default SignIn;