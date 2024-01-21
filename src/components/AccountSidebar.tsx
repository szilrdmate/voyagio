import React, { useState, useEffect } from "react";
import "../styles/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

interface SidebarLink {
  title: string;
  href: string;
  icon: JSX.Element;
}

interface SidebarProps {
  links: SidebarLink[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("");
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

  useEffect(() => {
    setActiveLink(window.location.href);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  const handleSearchFocus = () => {
    setIsCollapsed(false);
  };

  return (
    <>
      <div
        className={`shadow-xl border border-gray-200 fixed top-44 left-10 max-h-[60vh] h-full px-4 py-4 rounded-3xl select-none max-w-72 min-w-16 flex text-gray-800 flex-col bg-white transition-[max-width] duration-200 ease-in-out sidebar ${
          isCollapsed ? "collapsed" : ""
        }`}>
        <div className='sidebar-top-wrapper flex bg-white'>
          <div className='sidebar-top relative flex items-start justify-center flex-col overflow-hidden h-16 space-y-4'>
            <Link
              to='/'
              className='logo__wrapper flex items-center text-gray-800 font-bold text-xl gap-3  px-[0.6rem] py-0'>
              <img
                src='/icons/icon64.png'
                alt='Logo'
                className='logo-small rounded-full h-8 w-8 overflow-hidden object-cover'
              />
              <span className='hide company-name whitespace-nowrap'>
                Voyagio
              </span>
            </Link>
          </div>
          <button
            className='expand-btn bg-blue-500 absolute grid place-content-center cursor-pointer z-[2] right-[-1rem] w-[2.25rem] h-[2.25rem] rounded-full'
            type='button'
            onClick={toggleSidebar}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='bi bi-chevron-right stroke-white -rotate-180 w-5 h-5'
              viewBox='0 0 16 16'>
              <path
                fillRule='evenodd'
                d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'
              />
            </svg>
          </button>
        </div>
        <div className='search__wrapper relative w-full'>
          <FontAwesomeIcon
            className='absolute z-[2] top-[30%] left-6 w-6 h-6 translate-x-[-50%] pointer-events-none text-gray-800 cursor-pointer'
            icon={faMagnifyingGlass}
          />
          <input
            id='sidebar-search'
            className='bg-gray-100 text-gray-500 rounded-xl pl-12 text-xl w-full min-h-12'
            type='text'
            onFocus={handleSearchFocus}
          />
        </div>

        <div className='sidebar-links mt-4'>
          <ul className='relative flex gap-y-2 flex-col'>
            {links.map((link, index) => (
              <li key={index} className='text-gray-800 min-w-12'>
                <Link
                  to={link.href}
                  title={link.title}
                  className={`tooltip relative hover:bg-gray-200 text-gray-800 w-full pl-[0.6rem] text-xl flex gap-3 rounded-xl justify-start items-center min-h-[3.25rem] transition-[background-color] duration-200 ease-in-out ${
                    activeLink === link.href ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick(link.href)}>
                  {link.icon}
                  <span className='link hide overflow-hidden whitespace-nowrap font-medium ml-2'>
                    {link.title}
                  </span>
                  <span className='tooltip__content invisible bg-white border shadow-2xl border-gray-200 text-gray-800 font-medium text-center rounded-md px-4 py-2 absolute z-1 left-[4.5rem] after:content-none after:absolute after:top-[50%] after:left-[0%] after:ml-[-9px] after:mt-[-5px] after:border-[5px] after:border-transparent after:border-r-gray-100'>
                    {link.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='sidebar__profile flex items-center gap-3 min-h-10 mt-auto'>
          <div className='avatar__wrapper relative flex'>
            <img
              className='avatar hover:border-blue-500 block w-12 h-12 object-cover cursor-pointer rounded-full border-[3px] border-transparent transition-all duration-200 ease-in-out'
              src={"/icons/icon64.png"}
            />
          </div>
          <div className='avatar__name hide flex flex-col gap-1 whitespace-nowrap'>
            <div className='user-name text-gray-800 text-left font-semibold'>
              User Name
            </div>
            <div className='email text-gray-500 text-sm'>
              {user && user?.email}
            </div>
          </div>
          <button onClick={handleLogout} className='ml-auto text-red-500 hide'>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
