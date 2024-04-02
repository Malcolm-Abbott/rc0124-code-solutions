import './AppDrawer.css';
import { Link, Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

interface MenuItem {
  name: string;
  iconUrl: string;
  path: string;
}

type Props = {
  menuItems: MenuItem[];
  isActive: boolean;
  onNavClick: () => void;
};

export function AppDrawer({ menuItems, isActive, onNavClick }: Props) {
  return (
    <div className="flex-page vw-100">
      <nav className={`nav-bar ${isActive ? 'is-open' : 'is-closed'}`}>
        <FaBars className="fa-bars" size={45} onClick={() => onNavClick()} />
        <ul>
          <li className={isActive ? '' : 'hidden'}>
            <h3 className="nav-heading">Hylian Shopping</h3>
          </li>
          <li>
            <Link to="/about" className="flex-li">
              <img src={menuItems[0].iconUrl} height="20px" width="25px" />
              <p className={isActive ? 'p-li' : 'p-li hidden'}>About</p>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex-li">
              <img src={menuItems[1].iconUrl} height="20px" width="25px" />
              <p className={isActive ? 'p-li' : 'p-li hidden'}>Catalog</p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
}
