import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  return (
    <div className='fixed w-full top-0 left-0'>
      {!isMobile && <DesktopNav />}
      {isMobile && <MobileNav />}
    </div>
  );
};

export default Navbar;
