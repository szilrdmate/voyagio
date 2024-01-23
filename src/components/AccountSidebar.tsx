import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { User } from "firebase/auth";

type AccountSection = "history" | "settings" | "help" | "details";

type Link = {
  title: string;
  state: AccountSection;
  icon: JSX.Element;
};

type SidebarProps = {
  links: Link[];
  setAccountSection: (section: AccountSection) => void;
  user: User | null;
  logout: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  links,
  setAccountSection,
  user,
  logout,
}) => {
  return (
    <div
      id='sidebar'
      className='bg-white col-span-1 p-6 rounded-3xl border border-gray shadow-2xl flex flex-col justify-between'>
      <div>
        <h2 className='font-bold text-4xl mb-8'>Voyagio</h2>
        <ul className='space-y-4'>
          {links.map((link, index) => (
            <button
              onClick={() => setAccountSection(link.state)}
              className='w-full bg-gray-100 px-4 py-3 rounded-2xl font-medium text-xl flex items-center justify-start'
              key={index}>
              <div className='text-2xl'>{link.icon}</div>
              <p className='ml-4'>{link.title}</p>
            </button>
          ))}
        </ul>
      </div>
      <div className='w-full flex justify-between'>
        <img className='w-12 rounded-full' src='/logo.svg' alt='Logo' />
        <div>
          <p className='font-semibold text-lg'>{user?.email}</p>
          <p>{user?.email}</p>
        </div>
        <button onClick={logout} className='text-red-500 text-2xl'>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
