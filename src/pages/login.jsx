import { useAuth0 } from '@auth0/auth0-react';
import { useAuthenticator } from '../hooks/useAuthenticator';

import { LOGIN, DASHBOARD } from '../config/routes';

export const Login = () => {
  useAuthenticator(DASHBOARD, LOGIN);
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <span onClick={() => loginWithRedirect()}>Login</span>
    </div>
  );
};
