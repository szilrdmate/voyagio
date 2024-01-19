import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const AccountDetails: React.FC = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  };

  return (
    <>
      <h1 className='text-4xl font-bold'>Account</h1>
      <p>
        <span className='font-semibold'>User email: </span>
        {user && user?.email}
      </p>
      <button onClick={handleLogout} className='button bg-blue-500 text-white'>
        Log Out
      </button>
    </>
  );
};

export default AccountDetails;
