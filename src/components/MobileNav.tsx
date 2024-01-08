import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <>
      <Link to='/' className=''>
        Home
      </Link>
      <Link to='/destinations' className=''>
        Destinations
      </Link>
      <Link to='/explore' className=''>
        Explore
      </Link>
      <Link to='/about' className=''>
        About
      </Link>
      <Link to='/contact' className=''>
        Contact
      </Link>
    </>
  );
};

export default MobileNav;
