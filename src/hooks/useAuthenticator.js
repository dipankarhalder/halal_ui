import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

export const useAuthenticator = (authlink, notAuthLink) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(authlink);
    } else {
      navigate(notAuthLink);
    }
  }, [authlink, notAuthLink, isAuthenticated, navigate]);
};
