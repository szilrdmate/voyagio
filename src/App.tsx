import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Explore from "./pages/Explore";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Planner from "./pages/Planner";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/planner' element={<Planner />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
