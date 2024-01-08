import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {!isMobile && <DesktopNav />}
      {isMobile && <MobileNav />}
    </>
  );
};

export default Navbar;
