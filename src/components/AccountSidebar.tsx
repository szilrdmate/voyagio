import React, { useState, useEffect } from "react";
import "../styles/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faMagnifyingGlass,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
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

  const ExpandIcon = <FontAwesomeIcon icon={faChevronRight} />;
  const CollapseIcon = <FontAwesomeIcon icon={faChevronLeft} />;

  return (
    <>
      <nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <div className='sidebar-top-wrapper'>
          <div className='sidebar-top'>
            <a href='#' className='logo__wrapper'>
              <img
                src='./public/icons/icon64.png'
                alt='Logo'
                className='logo-small rounded-full'
              />
              <span className='hide company-name'>Voyagio</span>
            </a>
          </div>
          <button className='expand-btn' type='button' onClick={toggleSidebar}>
            {isCollapsed ? ExpandIcon : CollapseIcon}
          </button>
        </div>
        <div className='search__wrapper'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type='text'
            aria-labelledby='search-icon'
            onFocus={handleSearchFocus}
          />
        </div>

        <div className='sidebar-links'>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  title={link.title}
                  className={`tooltip ${
                    activeLink === link.href ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick(link.href)}>
                  {link.icon}
                  <span className='link hide'>{link.title}</span>
                  <span className='tooltip__content'>{link.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='sidebar__profile'>
          <div className='avatar__wrapper'>
            <img className='avatar' src={"./public/icons/icon64.png"} />
            <div className='online__status'></div>
          </div>
          <div className='avatar__name hide'>
            <div className='user-name'>{user && user?.email}</div>
            <div className='email'>{user && user?.email}</div>
          </div>
          <button onClick={handleLogout} className='logout hide'>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
