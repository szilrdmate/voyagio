import React from "react";
import { UserAuth } from "../context/AuthContext";

const AccountDetails: React.FC = () => {
  const { user } = UserAuth();

  return (
    <div>
      <h2 className="mb-8 text-5xl font-bold text-gray-800">Account Details</h2>
      {user?.photoURL ? (
        <img
          className="h-28 w-28 bg-gray-300"
          src={user?.photoURL}
          alt="Profile"
        />
      ) : (
        <div className="h-28 w-28 rounded-full bg-gray-300"></div>
      )}
      <p>{user?.displayName}</p>
      <p>{user?.email}</p>
      {user?.emailVerified ? <p>Verified</p> : <p>Non verified</p>}
    </div>
  );
};

export default AccountDetails;
