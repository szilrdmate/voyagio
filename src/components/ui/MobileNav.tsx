import React, { useState, useCallback } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from "../../context/AuthContext";

const MobileNav = React.memo(() => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = useCallback(() => setIsOpen((prevState) => !prevState), []);
	const { user } = UserAuth();
	const location = useLocation();
	const isHidden = location.pathname === "/signin" || location.pathname === "/signup";
	const hasGrayBg = location.pathname === "/planner";

	const renderNavLink = (to: string, text: string) => (
		<NavLink to={to} className="transition-color text-2xl font-semibold duration-150 hover:text-blue-400" onClick={toggleMenu}>
			{text}
		</NavLink>
	);

	return (
		<div className={`bg-gray-800 py-6 sm:bg-gradient-to-b sm:from-[#00000060] sm:to-transparent ${hasGrayBg ? "bg-gray-800" : ""}`}>
			<div className="mx-auto flex items-center justify-between px-4">
				<NavLink to="/">
					<img src="/logo.svg" className="w-10" alt="Voyagio logo" />
				</NavLink>
				<button aria-label="Open Menu" className="text-xl font-bold" onClick={toggleMenu}>
					<FontAwesomeIcon className="text-3xl text-white" icon={isOpen ? faX : faBars} />
				</button>
			</div>
			{isOpen && (
				<div className="fixed left-0 top-0 flex h-screen w-full flex-col items-center justify-center space-y-4 bg-black bg-opacity-50 py-3 text-white backdrop-blur-xl">
					{renderNavLink("/", "Home")}
					<hr className="w-[80%] opacity-30" />
					{renderNavLink("/planner", "Plan A Trip")}
					<hr className="w-[80%] opacity-30" />
					{renderNavLink("/blog", "Blog")}
					<hr className="w-[80%] opacity-30" />
					<Link target="_blank" to="https://voyagio.canny.io/feature-requests" className="transition-color text-2xl font-semibold duration-150 hover:text-blue-400" onClick={toggleMenu}>
						Feedback
					</Link>
					{user ? (
						<>
							<hr className="w-[80%] opacity-30" />
							{renderNavLink("/account", "Account")}
						</>
					) : (
						<NavLink to="/sign" onClick={toggleMenu} className={`button w-[80%] bg-gradient-to-bl from-sky-500 to-indigo-500 text-center text-2xl font-bold ${isHidden ? "hidden" : ""}`}>
							Sign In
						</NavLink>
					)}
				</div>
			)}
		</div>
	);
});

export default MobileNav;
