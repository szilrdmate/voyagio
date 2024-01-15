import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Explore from "./pages/Explore";
import Navbar from "./components/Navbar";
import Planner from "./pages/Planner";
import NotFound from "./pages/NotFound";
import { ItineraryProvider } from "./contexts/ItineraryContext";

const App: React.FC = () => {
  return (
    <div className='App'>
      <ItineraryProvider>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='explore' element={<Explore />} />
          <Route path='destinations' element={<Blog />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/planner' element={<Planner />} />
        </Routes>
      </ItineraryProvider>
    </div>
  );
};

export default App;
