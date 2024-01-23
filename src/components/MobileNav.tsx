import { NavLink, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from "../context/AuthContext";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = UserAuth();
  const location = useLocation();
  const path =
    location.pathname == "/signin" || location.pathname == "/signup"
      ? "hidden"
      : "";

  const pathBg = location.pathname == "/planner" ? "bg-gray-800" : "";

  return (
    <div
      className={`bg-gray-800 py-6 sm:bg-gradient-to-b sm:from-[#00000060] sm:to-transparent ${pathBg}`}
    >
      <div className="mx-auto flex items-center justify-between px-4">
        <NavLink to="/">
          <img src="/logo.svg" className="w-10" alt="Voyagio logo" />
        </NavLink>
        <button
          className="text-xl font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon className="text-3xl text-white" icon={faBars} />
        </button>
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 flex h-screen w-full flex-col items-center justify-center space-y-4 bg-black bg-opacity-50 py-3 text-white backdrop-blur-xl">
          <button
            className="absolute right-4 top-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon className="text-3xl text-white" icon={faX} />
          </button>
          <NavLink
            to="/"
            className="transition-color text-2xl font-semibold duration-150 hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <hr className="w-[80%] opacity-30" />
          <NavLink
            to="/planner"
            className="transition-color text-2xl font-semibold duration-150 hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Plan A Trip
          </NavLink>
          <hr className="w-[80%] opacity-30" />
          <NavLink
            to="/blog"
            className="transition-color text-2xl font-semibold duration-150 hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </NavLink>
          <hr className="w-[80%] opacity-30" />
          <Link
            target="_blank"
            to="https://voyagio.canny.io/feature-requests"
            className="transition-color text-2xl font-semibold duration-150 hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Feedback
          </Link>
          {user ? (
            <>
              <hr className="w-[80%] opacity-30" />
              <NavLink
                to="/account"
                className="transition-color text-2xl font-semibold duration-150 hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                Account
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/sign"
              onClick={() => setIsOpen(false)}
              className={`button w-[80%] bg-teal-500 text-center text-2xl font-bold ${path}`}
            >
              Sign In
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
