import React from "react";
import { UserAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const AccountDetails: React.FC = () => {
  const { user } = UserAuth();

  return (
    <div>
      <h2 className="mb-16 text-5xl font-bold text-gray-800">
        Account Details
      </h2>
      <div className="flex w-full space-x-8">
        {user?.photoURL ? (
          <img
            className="h-28 w-28 bg-gray-300"
            src={user?.photoURL}
            alt="Profile"
          />
        ) : (
          <div className="mb-4 h-28 w-28 rounded-full bg-gray-300"></div>
        )}
        <div className="flex flex-col pt-2">
          <p className="mb-2 text-2xl font-semibold text-gray-800">
            {user?.displayName || "Unverified user"}{" "}
            <span className="text-base font-normal">
              {user?.emailVerified ? (
                <FontAwesomeIcon
                  className="h-3 w-3 rounded-full bg-blue-500 p-1 text-base text-white"
                  icon={faCheck}
                />
              ) : (
                ""
              )}
            </span>
          </p>
          <p>{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
