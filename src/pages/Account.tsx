import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faGear,
  faClockRotateLeft,
  faCircleInfo,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import History from "../components/History";

type AccountSection = "history" | "settings" | "help" | "details";

type Link = {
  title: string;
  state: AccountSection;
  icon: JSX.Element;
};

const links: Link[] = [
  {
    title: "Account Details",
    state: "details",
    icon: <FontAwesomeIcon icon={faAddressBook} />,
  },
  {
    title: "History",
    state: "history",
    icon: <FontAwesomeIcon icon={faClockRotateLeft} />,
  },
  {
    title: "Settings",
    state: "settings",
    icon: <FontAwesomeIcon icon={faGear} />,
  },
  {
    title: "Help",
    state: "help",
    icon: <FontAwesomeIcon icon={faCircleInfo} />,
  },
];

const Account: React.FC = () => {
  const [accountSection, setAccountSection] =
    useState<AccountSection>("details");

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

  const renderSection = () => {
    switch (accountSection) {
      case "details":
        return <div>Details</div>;
      case "history":
        return <History />;
      case "settings":
        return <div>Settings</div>;
      case "help":
        return <div>Help</div>;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className='min-h-screen pt-40 pb-20 px-6 grid gap-4 grid-cols-4'>
      <div className='bg-white col-span-1 p-6 rounded-3xl border border-gray shadow-2xl flex flex-col justify-between'>
        <div>
          <h2 className='font-bold text-4xl mb-8'>Account Details</h2>
          <ul className='space-y-4'>
            {links.map((link, index) => (
              <button
                onClick={() => setAccountSection(link.state)}
                className='w-full bg-gray-100 px-4 py-3 rounded-2xl font-medium text-xl flex items-center justify-'
                key={index}>
                <div className='text-2xl'>{link.icon}</div>
                <p className='ml-4'>{link.title}</p>
              </button>
            ))}
          </ul>
        </div>
        <div className='w-full flex justify-between'>
          <img className='w-12 rounded-full' src='/logo.svg' />
          <div>
            <p className='font-semibold text-lg'>{user?.email}</p>
            <p>{user?.email}</p>
          </div>
          <button className='text-red-500 text-2xl' onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        </div>
      </div>
      <div className='col-span-3 p-6 rounded-3xl'>{renderSection()}</div>
    </div>
  );
};

export default Account;
