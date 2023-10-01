import { Outlet, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { LOGIN } from './routes';
import { Sidebar } from '../components/sidebar';

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <div className="app_wrapper_cover">
      <Sidebar />
      <Outlet />
    </div>
  ) : (
    <Navigate to={LOGIN} />
  );
};
