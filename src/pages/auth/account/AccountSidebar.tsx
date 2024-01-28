import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { SidebarProps } from "../../../types/SidebarTypes";
import { useMediaQuery } from "react-responsive";

const Sidebar: React.FC<SidebarProps> = ({ links, setAccountSection, user, logout }) => {
	const isMobile = useMediaQuery({ maxWidth: 768 });

	const menuTitle = isMobile ? "Account Settings" : "Voyagio";

	return (
		<div id="sidebar" className="flex h-fit flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl sm:col-span-1">
			<div>
				<h2 className="mb-8 text-3xl font-bold sm:hidden md:block">{menuTitle}</h2>
				<ul className="mb-4 flex flex-row space-x-4 sm:mb-6 sm:flex-col sm:space-x-0 sm:space-y-4">
					{links.map((link, index) => (
						<button onClick={() => setAccountSection(link.state)} className="flex w-full items-center justify-center rounded-2xl bg-gray-100 p-4 font-medium sm:px-4 sm:py-3 md:justify-start" key={index}>
							<div className="text-2xl">{link.icon}</div>
							<p className="hidden text-base sm:ml-4 md:block md:text-xl ">{link.title}</p>
						</button>
					))}
				</ul>
			</div>
			<div className="flex w-full justify-between">
				<img className="w-12 rounded-full" src="/logo.svg" alt="Logo" />
				<div className="sm:hidden lg:block">
					<p className="text-lg font-semibold">Account:</p>
					<p>{user?.email}</p>
				</div>
				<button onClick={logout} className="text-2xl text-red-500">
					<FontAwesomeIcon icon={faRightFromBracket} />
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
