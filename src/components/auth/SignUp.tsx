import React, { useState } from "react";
import { auth } from "../../utils/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <form onSubmit={signUp}>
        <h2>Create Account</h2>
        <input
          type='email'
          name='sign-up-email'
          id='sign-up-email'
          autoComplete='true'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter email address'
        />
        <input
          type='password'
          name='sign-up-password'
          id='sign-up-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter your password'
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
