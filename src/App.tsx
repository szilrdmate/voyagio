import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Planner from "./pages/Planner";
import NotFound from "./pages/NotFound";
import { ItineraryProvider } from "./context/ItineraryContext";
import Account from "./pages/Account";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

const App: React.FC = () => {
  return (
    <div className='App'>
      <ItineraryProvider>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/planner' element={<Planner />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={<Account />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ItineraryProvider>
    </div>
  );
};

export default App;
