import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Explore from "./pages/Explore";
import Navbar from "./components/Navbar";
import Planner from "./pages/Planner";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LayoutWithNavbar />}>
          <Route index element={<Home />} />
          <Route path='explore' element={<Explore />} />
          <Route path='destinations' element={<Destinations />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/planner' element={<Planner />} />
      </Routes>
    </div>
  );
}

function LayoutWithNavbar() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This is where nested routes will be rendered */}
    </>
  );
}

export default App;
