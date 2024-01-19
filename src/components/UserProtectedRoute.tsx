import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

type ProtectedRouteProps = {
  component: React.ComponentType;
};

const UserProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
}) => {
  const { user, loading } = UserAuth();

  if (loading) {
    // Show loading indicator or return null
    return (
      <div className='w-screen h-screen grid place-content-center'>
        <FontAwesomeIcon
          className='animate-spin text-gray-800 text-6xl '
          icon={faSpinner}
        />
      </div>
    );
  }

  if (!user) {
    return <Component />;
  }

  return <Navigate to='/account' replace />;
};

export default UserProtectedRoute;
