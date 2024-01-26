import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 915px)" });
	return (
		<div className="absolute left-0 top-0 z-20 w-full">
			{!isMobile && <DesktopNav />}
			{isMobile && <MobileNav />}
		</div>
	);
};

export default Navbar;
