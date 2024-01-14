import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations.tsx";
import Explore from "./pages/Explore.tsx";
import Navbar from "./components/Navbar.tsx";
import Planner from "./pages/Planner.tsx";
import NotFound from "./pages/NotFound.tsx";

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
