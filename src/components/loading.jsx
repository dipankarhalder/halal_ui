import './style.css';
import { HiOutlineTerminal } from 'react-icons/hi';

export const Loading = () => {
  return (
    <div className="app_loading">
      <div className="app_loading_inside">
        <span>
          <HiOutlineTerminal />
        </span>
        <p>Please wait, we are processing the data...</p>
      </div>
    </div>
  );
};
