import { NavLink, Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const DesktopNav = () => {
	const { user, loading } = UserAuth();

	const navLoadClass = loading ? "opacity-0" : "";

	return (
		<div className="fixed box-border w-full border-b border-b-slate-800 bg-slate-950 py-4 text-gray-100">
			<div className="m-auto flex max-w-7xl items-center justify-between text-xl font-bold">
				<NavLink className="mr-4" to="/">
					<img src="/logo.svg" className="h-[58px] rounded-full" alt="Voyagio logo" />
				</NavLink>
				<div>
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
				</div>
				{!user ? (
					<NavLink to="/sign" aria-label="Sign in or sign up!" className={`ml-4 flex h-[58px] w-[58px] items-center justify-center rounded-full border-4 border-gray-500 bg-gray-300 text-xl font-bold duration-300 hover:border-blue-500 ${navLoadClass}`}>
						<FontAwesomeIcon className="text-gray-500 " icon={faUserPlus} />
					</NavLink>
				) : (
					<NavLink to="/account" aria-label="Account page" className={` group ml-4 flex w-fit items-center justify-center rounded-full border-4 border-[#264459] bg-[#264459] text-xl font-bold duration-300 hover:border-blue-500 hover:bg-blue-500`}>
						<FontAwesomeIcon className=" text-5xl text-[#fbfcfd]" icon={faCircleUser} />
					</NavLink>
				)}
			</div>
		</div>
	);
};

export default DesktopNav;
