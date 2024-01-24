import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faClockRotateLeft, faCircleInfo, faBug, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import History from "../components/History";
import Sidebar from "../components/AccountSidebar";
import AccountSettings from "../components/AccountSettings";
import AccountHelp from "../components/AccountHelp";

type AccountSection = "history" | "settings" | "help" | "details" | "soon" | "bug";

type Link = {
	title: string;
	state: AccountSection;
	icon: JSX.Element;
};

const links: Link[] = [
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
		title: "Report a Bug",
		state: "bug",
		icon: <FontAwesomeIcon icon={faBug} />,
	},
	{
		title: "Help",
		state: "help",
		icon: <FontAwesomeIcon icon={faCircleInfo} />,
	},
	{
		title: "Coming Soon",
		state: "soon",
		icon: <FontAwesomeIcon icon={faCircleQuestion} />,
	},
];

const Account: React.FC = () => {
	const [accountSection, setAccountSection] = useState<AccountSection>("history");

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
			case "history":
				return <History />;
			case "settings":
				return <AccountSettings />;
			case "help":
				return <AccountHelp />;
			case "bug":
				return <AccountHelp />;
			case "soon":
				return <div>Coming Soon</div>;
			default:
				return (
					<>
						<h2 className="mb-8 text-5xl font-bold text-gray-800">Select an account section</h2>
					</>
				);
		}
	};

	return (
		<div className="grid min-h-screen grid-cols-4 gap-4 px-6 pb-20 pt-40">
			<Sidebar links={links} setAccountSection={setAccountSection} user={user} logout={handleLogout} />
			<div className="col-span-3 rounded-3xl p-6">{renderSection()}</div>
		</div>
	);
};

export default Account;
