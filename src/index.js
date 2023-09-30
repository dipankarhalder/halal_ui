import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import { Application } from './application';
import { REACT_DOMAIN, REACT_CLIENT_ID } from './config/appConfig';
import './style.css';

const rootElement = document.getElementById('root');
const rootApplication = ReactDOM.createRoot(rootElement);

rootApplication.render(
  <StrictMode>
    <Auth0Provider
      domain={REACT_DOMAIN}
      clientId={REACT_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>,
);
