import { NavLink, Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const DesktopNav = () => {
	const { user, loading } = UserAuth();

	const navLoadClass = loading ? "opacity-0" : "";

	return (
		<div className="to-transaprent fixed box-border w-full bg-gradient-to-b from-gray-800 py-4 text-white">
			<div className="mx-auto flex w-fit items-center overflow-hidden rounded-full border-[1px] border-white border-opacity-20 bg-blue-100 bg-opacity-20 text-xl font-bold shadow-2xl backdrop-blur-xl">
				<NavLink className="mr-4" to="/">
					<img src="/logo.svg" className="h-[58px] rounded-full" alt="Voyagio logo" />
				</NavLink>
				<NavLink to="/" className="transition-color rounded-full px-8 py-[14px] duration-150 hover:text-cyan-400">
					Home
				</NavLink>
				<NavLink to="/planner" className="transition-color rounded-full px-8 py-[14px] duration-150 hover:text-cyan-400">
					Plan A Trip
				</NavLink>
				<NavLink to="/blog" className="transition-color rounded-full px-8 py-[14px] duration-150 hover:text-cyan-400">
					Blog
				</NavLink>
				<Link target="_blank" to="https://voyagio.canny.io/feature-requests" className="transition-color rounded-full px-8 py-[14px] duration-150 hover:text-cyan-400">
					Feedback
				</Link>
				{!user ? (
					<NavLink to="/sign" className={`ml-4 flex h-[58px] w-[58px] items-center justify-center rounded-full border-4 border-gray-500 bg-gray-300 text-xl font-bold duration-300 hover:border-blue-500 ${navLoadClass}`}>
						<FontAwesomeIcon className="text-gray-500 " icon={faUserPlus} />
					</NavLink>
				) : (
					<NavLink to="/account" className={` group ml-4 flex w-fit items-center justify-center rounded-full border-4 border-[#264459] bg-[#264459] text-xl font-bold duration-300 hover:border-blue-500 hover:bg-blue-500`}>
						<FontAwesomeIcon className=" text-5xl text-[#fbfcfd]" icon={faCircleUser} />
					</NavLink>
				)}
			</div>
		</div>
	);
};

export default DesktopNav;
