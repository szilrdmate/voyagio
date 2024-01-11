import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Explore from "./pages/Explore";
import Feedback from "./pages/Feedback";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/feedback' element={<Feedback />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
