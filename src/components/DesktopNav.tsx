import { Link, parsePath } from "react-router-dom";

const DesktopNav = () => {
  const currentPath = parsePath;

  {
    /*const [currentStyle, setCurrentStyle] = useState("");

  {/*const navSelector = () => {
    let style = "left-0 w-20";
    switch (currentPath) {
      case null:
        style = "left-0 w-18";
        break;
      case "explore":
        style = "left-10 w-18";
        break;
      case "/destinations":
        style = "left-20 w-18";
        break;
      case "/faq":
        style = "left-30 w-18";
        break;
    }
    setCurrentStyle(style);
  };*/
  }

  return (
    <div className='box-border pt-4 bg-gradient-to-b from-[#00000070] to-transaprent'>
      <div className=' flex items-center justify-between mx-auto px-4 max-w-6xl '>
        <div>
          <Link to='/'>
            <img src='./public/logo.svg' className='w-36' alt='Voyagio logo' />
          </Link>
        </div>
        <div className='overflow-hidden px-8 rounded-full py-3 bg-blue-100 border-[1px] border-white border-opacity-20 bg-opacity-20 backdrop-blur-xl space-x-8 font-bold text-xl uppercase'>
          <Link
            to='/'
            className='hover:text-blue-400 transition-color duration-150'>
            Home
          </Link>
          <Link
            to='/explore'
            className='hover:text-blue-400 transition-color duration-150'>
            Explore
          </Link>
          <Link
            to='/destinations'
            className='hover:text-blue-400 transition-color duration-150'>
            Destinations
          </Link>
          <Link
            to='/faq'
            className='hover:text-blue-400 transition-color duration-150'>
            FAQ
          </Link>
        </div>
        <div>Powered by GPT</div>
      </div>
    </div>
  );
};

export default DesktopNav;
