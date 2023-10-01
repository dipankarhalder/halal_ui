import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route } from 'react-router-dom';

import { LOGIN, DASHBOARD } from './config/routes';
import { ProtectedRoute } from './config/protected';
import { Loading } from './components/loading';

import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';

export const Application = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      {/* Authentication */}
      <Route path={LOGIN} element={<Login />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path={DASHBOARD} element={<Dashboard />} />
      </Route>

      {/* <Route element={<ProtectedRoute />}>
        <Route path={SETTINGS} element={<Settings />} />
      </Route> */}

      {/* Not found */}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};
