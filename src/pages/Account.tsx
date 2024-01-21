import React from "react";
import Sidebar from "../components/AccountSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faShop, faBook } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    title: "Dashboard",
    href: "#dashboard",
    icon: <FontAwesomeIcon icon={faGauge} />,
  },
  {
    title: "Market",
    href: "#market",
    icon: <FontAwesomeIcon icon={faShop} />,
  },
  {
    title: "History",
    href: "#history",
    icon: <FontAwesomeIcon icon={faBook} />,
  },
];

const Account: React.FC = () => {
  return (
    <div className='min-h-screen py-40 px-6'>
      <Sidebar links={links} />
    </div>
  );
};

export default Account;
