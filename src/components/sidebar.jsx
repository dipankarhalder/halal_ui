import './style.css';

import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { navigation } from '../config/content';

export const Sidebar = () => {
  const { logout } = useAuth0();

  return (
    <div className="app_sidebar_cover">
      <span className="app_logo"></span>
      <div className="app_navigation">
        {navigation.map((item, idx) => (
          <div className="app_nav_cover" key={idx}>
            {item.section_name !== '' && <h3>{item.section_name}</h3>}
            <ul>
              {item.list_item.map((itm, indx) => (
                <li key={indx}>
                  <Link to={itm.path}>
                    <span>
                      <itm.icon />
                    </span>
                    <p>{itm.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <span
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Logout
      </span>
    </div>
  );
};
