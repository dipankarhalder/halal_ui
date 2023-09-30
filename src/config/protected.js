import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { LOGIN } from './routes';

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <Navigate to={LOGIN} replace />;
  }

  return children;
};
