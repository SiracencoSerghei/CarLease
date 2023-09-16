// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/loved">Beloved</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;