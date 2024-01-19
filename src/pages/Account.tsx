import React, { useState } from "react";
import AccountDetails from "../components/auth/AccountDetails";

const Account: React.FC = () => {
  const [accountPage, setAccountPage] = useState<string>("details");

  const handleDetailsClick = () => {
    setAccountPage("details");
  };
  const handleHistoryClick = () => {
    setAccountPage("history");
  };
  const handleSettingsClick = () => {
    setAccountPage("settings");
  };

  return (
    <div className='w-full min-h-[200vh] py-40 px-6'>
      <div className='max-w-6xl w-full mx-auto grid grid-cols-8 grid-rows-1 gap-10'>
        <div className='fixed col-start-1 col-span-3 border rounded-3xl border-gray-300 py-8'>
          <button
            className=' font-bold text-lg px-6 py-2 w-full text-left'
            onClick={handleDetailsClick}>
            Account
          </button>

          <button
            className=' font-bold text-lg px-6 py-2 w-full text-left'
            onClick={handleHistoryClick}>
            History
          </button>

          <button
            className=' font-bold text-lg px-6 py-2 w-full text-left'
            onClick={handleSettingsClick}>
            Settings
          </button>
        </div>
        <div className='col-start-4 col-span-5'>
          {accountPage == "details" && <AccountDetails />}
          {accountPage == "history" && <>History</>}
          {accountPage == "settings" && <>Settings</>}
        </div>
      </div>
    </div>
  );
};

export default Account;
