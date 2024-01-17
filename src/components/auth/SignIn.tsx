import React, { useState } from "react";
import { auth } from "../../utils/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='w-full h-screen flex justify-center items-center bg-[url("https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
      <form
        className='w-96 bg-[#00000040] backdrop-blur border-gray-300 border py-12 px-8 rounded-lg space-y-8'
        onSubmit={signIn}>
        <div>
          <h2 className='text-white text-5xl font-bold'>Log In</h2>
        </div>
        <div>
          <input
            className='py-4 px-4 rounded-lg focus:outline-none w-full placeholder:text-gray-300 placeholder:text-lg bg-transparent border border-gray-300'
            type='email'
            name='sign-in-email'
            id='sign-in-email'
            autoComplete='true'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email address'
          />
        </div>
        <div>
          <input
            className='py-4 px-4 rounded-lg focus:outline-none w-full placeholder:text-gray-300 placeholder:text-lg bg-transparent border border-gray-300'
            type='password'
            name='sign-in-password'
            id='sign-in-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
          />
        </div>
        <div className='flex flex-col'>
          <Link className='text-blue-200 hover:underline' to='/signup'>
            Already have an account?
          </Link>
          <Link className='text-blue-200 hover:underline' to='/signup'>
            Forgot password?
          </Link>
        </div>
        <div>
          <button
            className='w-full button bg-teal-500 text-white text-xl'
            type='submit'>
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
