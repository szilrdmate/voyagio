import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faCircleInfo, faBug, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import History from "./account/History";
import Sidebar from "./account/AccountSidebar";
import AccountHelp from "./account/AccountHelp";
import AccountSubscription from "./account/AccountSubscription";
import AccountBug from "./account/AccountBug";
import { AccountSection, Link } from "../../types/SidebarTypes";

const links: Link[] = [
	{
		title: "History",
		state: "history",
		icon: <FontAwesomeIcon icon={faClockRotateLeft} />,
	},
	{
		title: "Upgrade Plan",
		state: "subscription",
		icon: <FontAwesomeIcon icon={faMoneyBillWave} />,
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
			case "help":
				return <AccountHelp />;
			case "bug":
				return <AccountBug />;
			case "subscription":
				return <AccountSubscription />;
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
