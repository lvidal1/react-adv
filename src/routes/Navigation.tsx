import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import logo from "../logo.svg";

import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
          <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {/**
               * It iterate over the routes array and create a NavLink for each
               */}
              {routes.map(({ path, name }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                    end
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {/**
             * It iterates over the routes array and renders a Route component
             */}
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            {/**
             * It renders a Route component with a default path
             */}
            <Route path="/" element={<Navigate to={routes[0].path} />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
};
