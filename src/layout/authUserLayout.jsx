import './style.css';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '../components/sidebar';

export const AuthUserLayout = () => {
  return (
    <div className="app_wrapper_cover">
      <Sidebar />
      <Outlet />
    </div>
  );
};
