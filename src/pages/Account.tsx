import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faGear,
  faClockRotateLeft,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import History from "../components/History";
import Sidebar from "../components/AccountSidebar";

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
      <Sidebar
        links={links}
        setAccountSection={setAccountSection}
        user={user}
        logout={handleLogout}
      />
      <div className='col-span-3 p-6 rounded-3xl'>{renderSection()}</div>
    </div>
  );
};

export default Account;
