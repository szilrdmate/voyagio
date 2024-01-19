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
    <div className='max-w-4xl mx-auto py-12 px-4 border borer-gray-300 rounded-xl'>
      <h1>Account</h1>
      <p>User email: {user && user?.email}</p>
      <button onClick={handleLogout} className='button'>
        Log Out
      </button>
    </div>
  );
};

export default AccountDetails;
