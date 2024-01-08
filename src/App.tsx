import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Destinations from "./pages/destinations";
import Explore from "./pages/Explore";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
