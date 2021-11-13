import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import LazyPage1 from "../pages/LazyPage1";
import LazyPage2 from "../pages/LazyPage2";
import LazyPage3 from "../pages/LazyPage3";

export const Navigation = () => {
  return (
    <div>
      <h2>Navigation</h2>

      <ul>
        <li>
          <Link to="lazy1">Lazy1</Link>
        </li>
        <li>
          <Link to="lazy2">Lazy2</Link>
        </li>
        <li>
          <Link to="lazy3">Lazy3</Link>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />

        <Route path="*" element={<Navigate replace to={ 'lazy1' } />} />
      </Routes>
    </div>
  );
};

export default Navigation;
