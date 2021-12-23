import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import logo from "../logo.svg";

import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponentsPage, FormikAbstractPage } from "../03-forms/pages";

export const Navigation = () => {

  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''} end>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={({ isActive }) => isActive ? 'nav-active' : ''} end>
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={({ isActive }) => isActive ? 'nav-active' : ''} end>
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={({ isActive }) => isActive ? 'nav-active' : ''} end>
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstract" className={({ isActive }) => isActive ? 'nav-active' : ''} end>
                Formik Abstract
              </NavLink>
            </li>


            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''} end>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''} end>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponentsPage />} />
          <Route path="/formik-abstract" element={<FormikAbstractPage />} />

          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </Router>
  );
};
