import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ProtectedRouteProps } from "../../types/ProtectedRouteProps";

const NoUserProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
	const { user, loading } = UserAuth();

	if (loading) {
		// Show loading indicator or return null
		return (
			<div className="grid h-screen w-screen place-content-center">
				<FontAwesomeIcon className="animate-spin text-6xl text-gray-800 " icon={faSpinner} />
			</div>
		);
	}

	if (!user) {
		return <Navigate to="/sign" replace />;
	}

	return <Component />;
};

export default NoUserProtectedRoute;
