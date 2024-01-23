import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Planner from "./pages/Planner";
import NotFound from "./pages/NotFound";
import { ItineraryProvider } from "./context/ItineraryContext";
import Account from "./pages/Account";
import AuthWrapper from "./components/auth/AuthWrapper";
import { LoadingProvider } from "./context/LoadingContext";
import { AuthContextProvider } from "./context/AuthContext";
import NoUserProtectedRoute from "./components/ProtectedRoute";
import UserProtectedRoute from "./components/UserProtectedRoute";

const App: React.FC = () => {
  return (
    <div className="App">
      <ItineraryProvider>
        <AuthContextProvider>
          <Navbar />
          <LoadingProvider>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/planner" element={<Planner />} />
              <Route path="/blog" element={<Blog />} />
              <Route
                path="/account"
                element={<NoUserProtectedRoute component={Account} />}
              />
              <Route
                path="/sign"
                element={<UserProtectedRoute component={AuthWrapper} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LoadingProvider>
        </AuthContextProvider>
      </ItineraryProvider>
    </div>
  );
};

export default App;
