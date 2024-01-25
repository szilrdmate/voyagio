import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { User } from "firebase/auth";

type AccountSection = "history" | "help" | "details" | "bug" | "subscription";

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

const Sidebar: React.FC<SidebarProps> = ({ links, setAccountSection, user, logout }) => {
	return (
		<div id="sidebar" className="col-span-1 flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl">
			<div>
				<h2 className="mb-8 text-4xl font-bold">Voyagio</h2>
				<ul className="space-y-4">
					{links.map((link, index) => (
						<button onClick={() => setAccountSection(link.state)} className="flex w-full items-center justify-start rounded-2xl bg-gray-100 px-4 py-3 text-xl font-medium" key={index}>
							<div className="text-2xl">{link.icon}</div>
							<p className="ml-4">{link.title}</p>
						</button>
					))}
				</ul>
			</div>
			<div className="flex w-full justify-between">
				<img className="w-12 rounded-full" src="/logo.svg" alt="Logo" />
				<div>
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
