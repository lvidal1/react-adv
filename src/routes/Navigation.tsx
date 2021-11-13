import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import logo from "../logo.svg";

import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

export const Navigation = () => {

  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? 'nav-active' : ''} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => isActive ? 'nav-active' : ''} end>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({isActive}) => isActive ? 'nav-active' : ''} end>
                Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className={({isActive}) => isActive ? 'nav-active' : ''} end>
                Shop
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/shop" element={<ShoppingPage />} />
        </Routes>
      </div>
    </Router>
  );
};
