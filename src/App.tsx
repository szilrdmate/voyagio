import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Planner from "./pages/planner/index";
import Blog from "./pages/blog/index";
import Account from "./pages/auth/index";
import NotFound from "./pages/404/index";
import Navbar from "./components/ui/Navbar";
import { ItineraryProvider } from "./context/ItineraryContext";
import AuthWrapper from "./pages/auth/auth/AuthWrapper";
import { LoadingProvider } from "./context/LoadingContext";
import { AuthContextProvider } from "./context/AuthContext";
import NoUserProtectedRoute from "./components/protected-routes/ProtectedRoute";
import UserProtectedRoute from "./components/protected-routes/UserProtectedRoute";

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
							<Route path="/account" element={<NoUserProtectedRoute component={Account} />} />
							<Route path="/sign" element={<UserProtectedRoute component={AuthWrapper} />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</LoadingProvider>
				</AuthContextProvider>
			</ItineraryProvider>
		</div>
	);
};

export default App;
