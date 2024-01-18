import React from "react";
import AccountDetails from "../components/auth/AccountDetails";

const Account: React.FC = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <AccountDetails />
    </div>
  );
};

export default Account;
