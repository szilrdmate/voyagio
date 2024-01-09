import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Explore from "./pages/Explore";
import Faq from "./pages/Faq";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
