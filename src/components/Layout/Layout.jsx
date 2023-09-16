// Layout.js
import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom'; // Import Outlet

export const Layout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet /> 
      </main>
      <footer>
        <p>&copy; 2023 AutoLeasing.</p>
      </footer>
    </div>
  );
};