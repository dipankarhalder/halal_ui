import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route } from 'react-router-dom';

import { ProtectedRoute } from './config/protected';
import { useAuthenticator } from './hooks/useAuthenticator';
import { AuthLayout } from './layout/authLayout';
import { AuthUserLayout } from './layout/authUserLayout';
import { LOGIN, DASHBOARD, SETTINGS } from './config/routes';

import { Loading } from './components/loading';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';
import { Settings } from './pages/settings';

export const Application = () => {
  useAuthenticator(DASHBOARD, LOGIN);
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    isAuthenticated && (
      <Routes>
        {/* Authentication */}
        <Route element={<AuthLayout />}>
          <Route path={LOGIN} element={<Login />} />
        </Route>

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <AuthUserLayout />
            </ProtectedRoute>
          }
        >
          <Route path={DASHBOARD} element={<Dashboard />} />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <AuthUserLayout />
            </ProtectedRoute>
          }
        >
          <Route path={SETTINGS} element={<Settings />} />
        </Route>

        {/* Not found */}
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    )
  );
};
